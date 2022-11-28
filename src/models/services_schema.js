const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const services = mongoose.model("services", servicesSchema);

module.exports = services;
