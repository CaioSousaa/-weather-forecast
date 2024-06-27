const routes = require("express").Router();
const Post = require("./models/Post");
const axios = require("axios");

const apiKey = "31ad99fb215b4d1a3df5a7255146a115";

routes.post("/post", async (req, res) => {
  const { city } = req.body;

  if (!city) {
    return res.status(400).send({ error: "The city is mandatory" });
  }

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    const post = await Post.create({
      country: data.sys.country,
      name: data.name,
      main: {
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      },
    });

    return res.json(post);
  } catch (error) {
    console.log("error:", error);
    return res.status(500).send({ error: "Something went wrong" });
  }
});

module.exports = routes;
