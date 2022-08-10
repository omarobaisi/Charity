const express = require("express");
const router = express.Router();
const Charity = require("../models/charity");
const Doner = require("../models/donor")
const axios = require("axios");

const getCharityInfo = async () => {
  try {
    return await axios.get(
      `https://api.data.charitynavigator.org/v2/Organizations?app_id=d54cad3f&app_key=202cc4e34ec2318a42feb48a2ffe8424`
    );
  } catch (e) {
    console.log(e);
  }
};

const orgenizeAPI = (data) => {
  const charities = [];
  for (let i = 50; i < 100; i++) {
    if (data[i].irsClassification) {
      let newCharity = {
        name: data[i].charityName,
        description: data[i].irsClassification.affiliation,
        website: data[i].charityNavigatorURL,
        classification: data[i].irsClassification.classification,
      };
      charities.push(newCharity);
    }
  }
  return charities;
};

router.get("/fetchCharities", async function (request, response) {
  try {
    let charityInfo = await getCharityInfo();
    const charities = orgenizeAPI(charityInfo.data);
    charities.forEach(async (charity) => {
      const newCharities = new Charity(charity);
      const savedCharities = await newCharities.save();
      console.log(savedCharities);
    });
    response.send(charities);
  } catch (e) {
    console.log(e);
  }
});

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
  const charities = await Charity.find({ classification: classification });
  response.send(charities);
});

router.post("/donate", async (req, res) => {
  const donation = req.body;
  const newDonation = new Doner(donation);
  const charities = await newDonation.save();
  res.send(charities);
});

module.exports = router;
