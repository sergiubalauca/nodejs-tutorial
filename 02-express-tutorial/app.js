const express = require("express");
const app = express();
const logger = require('./utils/logger');
const authorize = require('./utils/authorize');
// order matters - so invoke this before the routes; we can also add a specific path where the middleware will work (base path)
app.use('/api', [logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log('User: ', req.user);
  res.send("Items");
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
