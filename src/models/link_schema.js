const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  link: {
    type: String,
  },
});

const links = mongoose.model("links", linkSchema);

module.exports = links;
