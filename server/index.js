const express = require("express");
const Fs = require('fs');
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/banners", async (req, res) => {
    Fs.readFile("./server/banners/index.get.json", function(err, data) {
        if (err) throw err;
        const banners = JSON.parse(data);
        res.json(banners);
    });
});

app.get("/categories", async (req, res) => {
    Fs.readFile("./server/categories/index.get.json", function(err, data) {
        if (err) throw err;
        const categories = JSON.parse(data);
        res.send(categories);
    });
});

app.get("/products", async (req, res) => {
    Fs.readFile("./server/products/index.get.json", function(err, data) {
        if (err) throw err;
        const products = JSON.parse(data);
        res.json(products);
    });
});

app.get("/addtocart", async (req, res) => {
    Fs.readFile("./server/addToCart/index.post.json", function(err, data) {
        if (err) throw err;
        const msg = JSON.parse(data);
        res.json(msg);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});