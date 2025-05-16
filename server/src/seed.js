const mongoose = require("mongoose");
const Template = require("./models/Template");
// require("dotenv").config();
require("dotenv").config({ path: "../.env" }); // ✅ 强制指定路径（你在 src 目录里）

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Connected to MongoDB");
    await Template.deleteMany(); // 清空现有数据
    await Template.insertMany([
      {
        name: "platformer",
        displayName: "平台跳跃",
        description: "跳跃和冒险游戏，玩家控制角色躲避障碍。",
      },
      {
        name: "shooter",
        displayName: "动作射击",
        description: "射击敌人和躲避子弹的快节奏游戏。",
      },
      {
        name: "fighting",
        displayName: "战斗格斗",
        description: "近战对决，考验玩家反应和策略。",
      },
      {
        name: "text-adventure",
        displayName: "文字冒险",
        description: "基于文本的故事探索，注重剧情。",
      },
      {
        name: "horror-puzzle",
        displayName: "恐怖解密",
        description: "解谜和恐怖氛围相结合的沉浸式体验。",
      },
    ]);
    console.log("Templates seeded");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error:", err);
    mongoose.connection.close();
  });
