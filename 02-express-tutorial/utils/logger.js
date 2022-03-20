// req => middleware => res (so a middleware sits somewhere inbetween)
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  // res.send();
  next();
};

module.exports = logger;
