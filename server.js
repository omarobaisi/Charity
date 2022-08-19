const express = require("express");
const path = require("path");
const api = require("./server/routes/api");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const mongoose = require("mongoose");
const url = process.env.MONGODB_URI || "mongodb://localhost/yelp_camp";
mongoose.connect(url)

app.use("/", api);

const PORT = 3000;
app.listen(process.env.PORT || PORT, function () {
  console.log(`Server running on ${PORT}`);
});