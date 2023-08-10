const cron = require("node-cron");

// 在每天上午 11 点触发任务（杭州时区）
const task = cron.schedule(
  "13 11 * * *",
  () => {
    console.log("定时任务已触发，现在是上午 11 点。");
  },
  {
    scheduled: true,
    timezone: "Asia/Shanghai", // 设置时区为杭州
  }
);

console.log("定时任务已设置，在每天上午 11 点触发。");
