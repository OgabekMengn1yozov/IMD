const mongoose = require("mongoose");
const { MONGO_URL } = require("../../config");

// Models
require("../models/services_schema");
require("../models/statistic_schema");
require("../models/thoughts_schema");
require("../models/comments_schema");

module.exports = async function mongo() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MONGO CONNECTED");
  } catch (e) {
    console.log("MONGO CONNECT FAILED" + e);
  }
};
