const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/cart', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const Product = mongoose.model(
    'products', 
    new mongoose.Schema({
        _id: {type: String, default: shortid.generate},
        title: String,
        description: String,
        image: String,
        price: Number,
        availableSizes: [String]
    })
);

const url = '/api/products';
const urlID = url + '/:id';

app.get(url, async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.post(url, async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.delete(urlID, async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('serve art ' + port));