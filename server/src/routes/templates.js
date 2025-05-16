const express = require("express");
const router = express.Router();
const Template = require("../models/Template");

// 获取所有模板
router.get("/", async (req, res) => {
  try {
    const templates = await Template.find();
    res.json(templates);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
