const mongoose = require("mongoose");

const thoughtsSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
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

const thoughts = mongoose.model("thoughts", thoughtsSchema);

module.exports = thoughts;
