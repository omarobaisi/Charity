const express = require("express");
const path = require("path");
const api = require("./server/routes/api");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/charity', { useNewUrlParser: true })

app.use("/", api);

const port = 8088;
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});