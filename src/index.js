const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://mongo:12345@cluster0.ybcmfpp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.use(express.json());
app.use(morgan("dev"));

app.listen(3333, () => console.log("server is run"));
