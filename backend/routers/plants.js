const express = require('express');
const router = express.Router();
const Plant = require('../models/plant');
const Category = require('../models/category');

router.get(`/`, async(req, res) => {
    const plantList = await Plant.find().populate('category');

    if(!plantList) {
        res.status(404).json({success: false, message: 'Data Not Found'})
    }
    res.send(plantList);
})

router.post(`/`, async(req, res) => {
    try {
        const category = await Category.findById(req.body.category);
        if(!category) {
            return res.status(404).json({success: false, message: 'Category invalid (Not Found)'})
        }

        let plant = new Plant({
            name: req.body.name,
            category: req.body.category,
            color: req.body.color
        })

        plant = await plant.save();

        if(!plant)
        return res.status(500).send('The product cannot be created')

        return res.status(201).send(plant)
    } catch (error) {
        return res.status(500).json({message: 'Error Detected', error: error})
    }
})

module.exports = router;