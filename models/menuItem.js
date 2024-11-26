const mongoose = require ("mongoose");

//define the Person schema
const menuSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],  // Array of ingredients
    required: true
  },
  available: {
    type: Boolean,
    default: true
  }
});

// create schema models
const menu = mongoose.model('menu', menuSchema);
module.exports = menu;
