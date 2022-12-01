const mongoose = require("mongoose");

const portfoliosItemSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  portfolio_id: {
    type: String,
    reuired: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const portfolios_items = mongoose.model("portfolios_items", portfoliosItemSchema);

module.exports = portfolios_items;
