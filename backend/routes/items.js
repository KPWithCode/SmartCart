const router = require('express').Router();

let Item = require('../models/itemmodel');


router.get('/items', async (req, res) => {
    try {
        const getItems = await Item.find();
        res.json(getItems)
    } catch (err) {
        console.log('error', err)
    }
});


router.post('/add', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
        price: Number(req.body.price)
    });
    try {
        const addItem = await newItem.save()
        res.json(addItem);
    } catch (err) {
        res.sendStatus(500)
    }
});


module.exports = router;