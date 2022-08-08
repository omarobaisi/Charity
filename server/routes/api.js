const express = require("express");
const router = express.Router();

const Charity = require("../models/charity");

router.get("/charity", function (req, res) {
  res.send("page")
});

module.exports = router;
