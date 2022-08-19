const express = require("express");
const router = express.Router();
const Charity = require("../models/charity");
const Doner = require("../models/donor");
const axios = require("axios");
const { off } = require("../models/donor");

const createError = (error, explination, errorCode) => {
  const errorMessage = {
    error: error,
    detail: {
      surname: explination,
    },
    code: errorCode,
  };
  return createError;
};

router.get("/charities", async (req, res) => {
  const charities = await Charity.find({});
  res.send(charities);
});

router.get("/charity/:charityName", function (req, response) {
  const charityToFind = req.params.charityName;
  Charity.findOne({ name: charityToFind }, function (err, res) {
    if (res) {
      response.send(res);
    } else {
      const error = createError(
        "Not found",
        "We couldn't find the charity that you are looking for",
        404
      );
      response.send(error);
    }
  });
});
router.get("/charities/:classification", async function (request, response) {
  let classification = request.params.classification;
  let charities;
  console.log(classification);
  try {
    if (classification == "Choose Organization") {
      charities = await Charity.find({});
    } else {
      charities = await Charity.find({ classification: classification });
    }
  } catch (e) {
    const error = createError(
      "Not found",
      "We couldn't find the charities that you are looking for",
      404
    );
    response.send(error);
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
  } catch (e) {
    const error = createError("404 Not found", e);
    res.send(error);
  }
});
router.get("/charityAmount/:Charity", function (req, response) {
  const charityToFind = req.params.Charity;
  Charity.findOne({ name: charityToFind })
    .populate("doners")
    .exec(function (err, res) {
      if (err) {
        const error = createError(
          "Not found",
          "We couldn't find the charity that you are looking for",
          404
        );
        response.send(error);
      } else {
        response.send(res);
      }
    });
});
module.exports = router;
