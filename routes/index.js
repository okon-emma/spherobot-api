const express = require("express");
const router = express.Router();

const { index } = require("../services/index");

router.get("/", index);

module.exports = router;
