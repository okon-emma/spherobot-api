const express = require("express");
const router = express.Router();

const createCompletion = require("../services/openai/create-completion");

router.post("/completions", createCompletion);

module.exports = router;
