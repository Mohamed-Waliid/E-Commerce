const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'name required'],
    },
    description: {
      type: String,
      required: [true, 'description required'],
    },
    price: {
      type: Number,
      required: [true, 'price required'],
    },
    quantity: {
      type: Number,
      required: [true, 'quantity required'],
    }
  },
  { timestamps: true }
);


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
