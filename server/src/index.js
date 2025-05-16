const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const templateRoutes = require("./routes/templates");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// 连接MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// 使用模板路由
app.use("/api/templates", templateRoutes);

// 测试路由
app.get("/", (req, res) => {
  res.json({ message: "Welcome to GameGen SaaS API" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
