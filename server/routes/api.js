const express = require("express");
const router = express.Router();
const Charity = require("../models/charity");
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
  const charities = []
  for(let i=50; i<100; i++) {
    if(data[i].irsClassification) {
      let newCharity = {
        name: data[i].charityName,
        classification: data[i].irsClassification.classification,
        description: data[i].irsClassification.affiliation,
        website: data[i].charityNavigatorURL,
      };
      charities.push(newCharity)
    }
  }
  return charities
}

router.get("/charities", async function (request, response) {
  try {
    let charityInfo = await getCharityInfo();
    const charities = orgenizeAPI(charityInfo.data)
    response.send(charities);
  } catch(e) {
      console.log(e)
  }
});

module.exports = router;