const express = require("express");
const router = express.Router();
const Charity = require("../models/charity");
const axios = require("axios");

const getCharityInfo = async () => {
  try {
    let charityInfo = await axios.get(
      `https://api.data.charitynavigator.org/v2/Organizations?app_id=d54cad3f&app_key=202cc4e34ec2318a42feb48a2ffe8424`
    );
    return charityInfo;
  } catch (e) {
    console.log(e);
  }
};

router.get("/charities", async function (request, response) {
  try {
    let charityInfo = await getCharityInfo();
    const charities = [];
    charityInfo = charityInfo.data;
    for (let i = 50; i < 100; i++) {
      if (charityInfo[i].irsClassification) {
        let newCharity = {
          name: charityInfo[i].charityName,
          classification: charityInfo[i].irsClassification.classification,
          description: charityInfo[i].irsClassification.affiliation,
          // website: charityInfo[i].websiteURL,
        };
        charities.push(newCharity);
      }
    }
    response.send(charities);
  } catch (e) {
    console.log(e);
  }
});

router.get("/charities/:classification", async function (request, response) {
  let classification = request.params.classification;
 const charities = await Charity.find(
    {
      name: classification,
    }
  );
  response.send(charities)
});

module.exports = router;
