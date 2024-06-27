const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  country: String,
  name: String,
  main: {
    temp: Number,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    pressure: Number,
    humidity: Number,
  },
});

module.exports = mongoose.model("Post", PostSchema);
