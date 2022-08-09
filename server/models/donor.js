const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donorSchema = new Schema({
  name: String,
  amount: Number,
});

const Donor = mongoose.model("Donor", donorSchema);
module.exports = Donor;
