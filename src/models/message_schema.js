const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
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
    phone: {
      type: String,
      required: true,
    },
    read: {
        type: Boolean,
        required: true,
    }
  },
  { timestamps: true }
);

const messages = mongoose.model("messages", messageSchema);

module.exports = messages;
