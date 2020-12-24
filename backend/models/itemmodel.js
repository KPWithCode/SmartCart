const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Fruits', 'Herbs', 'Nuts', 'Snacks', 'Super Foods'],
        default: 'Snacks'
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        get: getPrice,
        set: setPrice
    }
});
// Getter
function getPrice(num) {
    return (num / 1000).toFixed(2);
}
// Setter
function setPrice(num) {
    return num * 1000;
}

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
