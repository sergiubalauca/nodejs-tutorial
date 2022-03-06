const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  //   encoding: "utf-8",
});

stream.on("data", (result) => {
  // this will retrieve data in chuncks of 64Kb by default
  // last logged bugger = remainder
  // highWaterMark = control size of chunk
  console.log(result);
});

stream.on("error", (error) => {
  console.log("Err: ", error);
});
