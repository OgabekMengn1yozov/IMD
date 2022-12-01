const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
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
  comment: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

const comments = mongoose.model("comments", commentsSchema);

module.exports = comments;
