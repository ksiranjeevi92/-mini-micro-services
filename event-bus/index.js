const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events");
  axios.post("http://localhost:4001/events");
  console.log(event);
  axios.post("http://localhost:4002/events", { ...event });

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Event bus listning on 4005");
});
