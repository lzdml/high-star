const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// 配置您的邮箱信息
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: 465,
  pool: true,
  secure: true, // 使用 SSL
  auth: {
    user: "dzlkuboy@163.com", // 发送邮件的邮箱地址
    pass: process.env.SMTP_PASSWORD, // 发送邮件的邮箱密码
  },
});

// 邮件内容
const mailOptions = {
  from: "dzlkuboy@163.com", // 发件人邮箱
  to: process.env.SMTP_SEND_TO, // 收件人邮箱
  subject: "定时邮件测试标题", // 邮件主题
  // text: "这是一封定时发送的测试邮件。", // 邮件内容
  html: fs.createReadStream(path.resolve(__dirname, "email.html")),
};

// 定时任务
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
