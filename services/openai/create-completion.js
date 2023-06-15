const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");
const TextCompletion = require("../../models/TextCompletion");
const OPENAI_API_KEY = require("../../config").secretKey;

module.exports = (req, res) => {
  const prompt = req.body.prompt;

  // const configuration = new Configuration({
  //   organization: "org-UzvvO7tyRaNEtX0M3lYVLTD5",
  //   apiKey: OPENAI_API_KEY,
  // });
  // const openai = new OpenAIApi(configuration);

  // async function callCreateCompletion() {
  //   const response = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: prompt,
  //     max_tokens: 100,
  //     temperature: 0,
  //   });

  axios
    .post(
      "https://api.openai.com/v1/chat/completions",
      JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
      {
        headers: {
          Authorization: "Bearer " + OPENAI_API_KEY,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response.data);
      const feedback = response.data.choices[0].message.content;

      res.send({
        success: true,
        message: feedback,
      });

      // Sync to Database
      const textCompletion = new TextCompletion({
        chat_id: response.data.id,
        prompt: prompt,
        model: response.data.model,
        feedback,
      });

      textCompletion
        .save(textCompletion)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
};
