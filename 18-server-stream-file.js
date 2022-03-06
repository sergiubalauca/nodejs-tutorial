const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // --- sending a large chunk of data
    // const text = fs.readFileSync("./content/big.txt", "utf-8");
    // res.end(text);

    // --- sending data using stream in chunks - can be seen in req headers
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
      // instead of doing res.end(text), we use pipe to push from the read stream into write stream, to write data in chunks
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      console.log("Err: ", err);
      res.end(err);
    });
  })
  .listen(8000);
