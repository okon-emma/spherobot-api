const shlog = (message) => {
  console.log(message);
};

const sendErr = (err) => {
  console.log("\x1b[31m", err);
};

module.exports = {
  shlog,
  sendErr,
};
