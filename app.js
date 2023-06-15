const express = require("express");
const cors = require("cors");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");

const { shlog, sendErr } = require("./utils/Log");
const port = 8443;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

// Routes Declaration
app.use("/", require("./routes/index"));
app.use("/chat", require("./routes/openai"));

// Error Handler
app.use((err, req, res, next) => {
  sendErr(err);
  res.status(500).send({
    success: false,
    message: "Unable to complete request",
    error: {
      name: JSON.stringify(err.name).replace(/[\"]/g, ""),
      message: JSON.stringify(err.message).replace(/[\"]/g, ""),
    },
  });
});

// Database Configuration
const db = require("./config").dbURL;

// Connect to Mongo
const start = async () => {
  try {
    await mongoose.connect(db);
    app.listen(port, () => {
      shlog(`Core Service listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Start Service
start();
