const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., "platformer"
  displayName: { type: String, required: true }, // e.g., "平台跳跃"
  description: { type: String },
});

module.exports = mongoose.model("Template", templateSchema);
