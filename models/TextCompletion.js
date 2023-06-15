const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = TextCompletion = mongoose.model(
  "TextCompletion",
  new Schema(
    {
      chat_id: { type: String },
      prompt: { type: String },
      model: { type: String },
      feedback: { type: String },
    },
    { timestamps: true }
  )
);
