const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Donor = require("./donor");

const charitySchema = new Schema({
  name: String,
  description: String,
  website: String,
  classification: String,
  doners: [{ type: Schema.Types.ObjectId, ref: "Donor" }],
});

const Charity = mongoose.model("Charity", charitySchema);
module.exports = Charity;
