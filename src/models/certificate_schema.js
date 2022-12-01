const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  direction_image: {
    type: String,
    required: true,
  },
  certificate_image: {
    type: String,
    required: true,
  },
});

const certificates = mongoose.model("certificates", certificateSchema);

module.exports = certificates;
