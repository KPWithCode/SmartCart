const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
          type: String,
          required: true
    },
    category: {
      type: String,
      enum: ['Fresh Produce', 'Herbs', 'Nuts', 'Snacks','Super Foods'],
      default: 'Snacks'
    },
    price: {
        type: Number,
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
