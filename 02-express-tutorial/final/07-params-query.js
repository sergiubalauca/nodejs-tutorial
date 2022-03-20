const express = require("express");
const app = express();
const { products } = require("../data");

app.get("/", (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});
app.get("/api/products/:productID", (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }

  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  // !!!!!! Changing the array itself does not change the orignal. Note the
  // original still only has one item, but the copy has two:
  const objArray = [{ foo: "bar" }];
  const shallowCopy = [...objArray];

  shallowCopy.push({ foo: "baz" });
  console.log("objArray after push:", objArray);
  console.log("shallowCopy after push:", shallowCopy);

  // However, since shallowCopy[0] is a reference pointing to the same object
  // as objArray[0], mutating either will change the other:
  shallowCopy[0].foo = "something else";
  console.log("objArray after mutation:", objArray);
  console.log("shallowCopy after mutation:", shallowCopy);

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    // !!! Try to alway make sure to use RETURN when conditionally sending a result. This way, we make sure
    // that the end the call
    return res.status(200).json({ sucess: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000....");
});
