const express = require("express");
const path = require("path");
const app = express();

// for loading static files, we use express.static (not the instance of the server -- express())
// we need a public folder (convention) or whatever name where the files should be located
// this is a setup of static and middleware - app.use() is used for that
app.use(express.static('./public'));

// -- we dont'necessarily neeed to sendFile index.html
// app.get("/", (req, res) => {
//   // express has a built in method for sending a file (which requires an absolute path and that is why I use path)
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// 1. adding to static assets
// 2. SSR - wi'll use template engine for that 
// });

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
