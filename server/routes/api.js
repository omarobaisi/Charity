const express = require("express");
const router = express.Router();
//const APIKey
const Charity = require("../models/charity");
const axios = require("axios");

const getCharityInfo = async () => {
  try {
    let charityInfo = await axios.get(
      `https://api.data.charitynavigator.org/v2/Organizations?app_id=d54cad3f&app_key=202cc4e34ec2318a42feb48a2ffe8424`
    );
    console.log(charityInfo);
  } catch (e) {
    console.log(e);
  }
};
//getCharityInfo();
router.get("/charities", async function (request, response) {
  try {
    let charityInfo = await getCharityInfo();
    console.log(charityInfo)
    response.end();
  } catch(e) {
      console.log(e)
  }
  
  // charityInfo
  //   .then(function (resp) {
  //     //let charityInfo = resp.data;
  //     let charity = {
  //       name: charityInfo.charityName,
  //       classification: charityInfo.irsClassification.classification,
  //       description: charityInfo.irsClassification.affiliation,
  //       website: charityInfo.websiteURL,
  //     };
  //     response.send(charity);
  //   })
  //   .catch(function (error) {
  //     response.status(404).send({ error: "The city name does not exist" });
  //   });
});

module.exports = router;
