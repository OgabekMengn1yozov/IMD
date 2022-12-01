const mongoose = require("mongoose");

const portfoliosSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
);

const portfolios = mongoose.model("portfolios", portfoliosSchema);

module.exports = portfolios;
