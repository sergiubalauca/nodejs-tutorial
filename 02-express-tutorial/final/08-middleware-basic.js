const express = require("express");
const app = express();

// req => middleware => res (so a middleware sits somewhere inbetween)

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  // res.send();
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
