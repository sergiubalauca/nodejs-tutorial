const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

// we go with .all to cover all http verbs, cause we don't know what the user wants from an unkown route
app.all("*", (req, res) => {
  res.status(404).send("<h1>No page</h1>");
});
app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});

//app.get
//app.post
//app.put
//app.delete
//app.all -- works with all get, post, put, delete
//app.use -- responsible for middleware
//app.listen
