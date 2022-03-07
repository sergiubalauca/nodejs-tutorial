const http = require("http");
const { readFileSync } = require("fs");

//get all files - we read the content of the html file syncronously, cause we only need to read it once
// when the server is instantiated, it's static
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  //   console.log("Req method: ", req.method);
  console.log("Req URL: ", req.url);
  const url = req.url;

  //!!! when we try to render navbar-app, it initially fails, cause index.html references styles/css, logo.svg and browser-app.js
  // so we will we have to manually request there paths --- that's why we go with EXPRESS
  switch (url) {
    case "/":
      // content-type really matters - if we choose text/plain, then the html write will not work, it will be just plain text
      // these are mime types
      res.writeHead(200, { "content-type": "text/html" });
      // res.end() MUST be called always to end the call, so that the browser does not get stuck
      res.write(homePage);
      res.end();
      break;

    case "/about":
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>About page</h1>");
      res.end();
      break;
    case "/styles.css":
      res.writeHead(200, { "content-type": "text/css" });
      res.write(homeStyles);
      res.end();
      break;
    case "/logo.svg":
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.write(homeImage);
      res.end();
      break;
    case "/browser-app.js":
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(homeLogic);
      res.end();
      break;
    default:
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>Page not found</h1>");
      res.end();
      break;
  }
});

server.listen(8000);
