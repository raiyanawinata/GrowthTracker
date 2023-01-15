const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');

router.get(`/`, async (req, res) => {
    const productList = await Product.find();

    if(!productList) {
        res.status(500).json({success: false})
    }
    res.send(productList);
})

router.get(`/:id`, async (req, res) => {
    const productList = await Product.findById(req.params.id);

    if(!productList) {
        res.status(500).json({success: false})
    }
    res.send(productList);
})

router.post(`/`, async (req, res) => {

    try {
        const category = await Category.findById(req.body.category);
        if(!category) {
            return res.status(400).send('Invalid category!');
        }

        let product = new Product({
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        })

        product = await product.save();

        if(!product)
        return res.status(500).send('The product cannot be created')
        return res.send(product);
    } catch(err) {
        return res.status(500).json({message: 'Error detected', error: err})
    }
})

// router.delete(`/`, async(req, res) => {
//     Product.deleteMany();
// })

module.exports = router;