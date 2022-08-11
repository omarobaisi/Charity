const express = require("express");
const router = express.Router();
const Charity = require("../models/charity");
const Doner = require("../models/donor");
const axios = require("axios");

router.get("/getCharities", async (req, res) => {
  const charities = await Charity.find({});
  res.send(charities);
});

router.get("/getCharity/:Charity", function (req, response) {
  const charityToFind = req.params.Charity;
  Charity.findOne({ name: charityToFind }, function (err, res) {
    if (res) {
      response.send(res);
    } else {
      response.send("not found");
    }
  });
});
router.get("/charities/:classification", async function (request, response) {
  let classification = request.params.classification;
  let charities;
  console.log(classification)
  try {
    if(classification == "Choose Organization") {
      charities = await Charity.find({});
    } else {
      charities = await Charity.find({ classification: classification });
    }
  } catch(e) {
    console.log(e)
  }
  response.send(charities);
});
router.post("/donate", async (req, res) => {
  try {
    const donation = req.body;
    let doner = new Doner({ name: donation.name, amount: donation.amount });
    await doner.save();
    let charity = await Charity.findOne({ name: donation.nameOfcharity });
    charity.doners.push(doner);
    await charity.save();
    res.end();
  } catch(e) {
    console.log(e)
  }
});
router.get("/getCharityAmount/:Charity", function (req, response) {
  const charityToFind = req.params.Charity;
  Charity.findOne({ name: charityToFind })
    .populate("doners")
    .exec(function (err, res) {
      response.send(res);
    });
});
module.exports = router;
