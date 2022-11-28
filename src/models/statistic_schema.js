const mongoose = require("mongoose");

const statisticSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  count: {
    type: String,
  },
  name: {
    type: String,
  }
});

const statistics = mongoose.model("statistics", statisticSchema);

module.exports = statistics;
