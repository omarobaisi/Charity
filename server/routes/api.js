const express = require("express");
const router = express.Router();
const Charity = require("../models/charity");
const axios = require("axios");

router.get("/charities/:classification", async function (request, response) {
  let classification = request.params.classification;
  const charities = await Charity.find({ classification: classification });
  response.send(charities);
});

module.exports = router;
