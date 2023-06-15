const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = User = mongoose.model(
  "User",
  new Schema(
    {
      phone: {
        type: String,
        required: true,
        unique: true,
      },
      fName: {
        type: String,
        required: false,
      },
      lName: {
        type: String,
        required: false,
      },
      email: {
        type: String,
        required: true,
        unique: false,
      },
      password: {
        type: String,
        required: false,
      },
    },
    { timestamps: true }
  )
);
