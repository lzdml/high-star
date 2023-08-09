const fs = require("fs");
const path = require("path");
const moment = require("moment");
require("moment/locale/zh-cn");
moment.locale("zh-cn");

function getSidebar(today = moment().format("YYYY-MM-DD")) {
  const sidebarItem = {
    text: today,
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: "github 高星项目",
        link: `/statistics/${today}`,
      },
    ],
  };

  return sidebarItem;
}

function updateSidebarFile(callback) {
  const filePath = path.join(
    __dirname,
    "/docs/.vitepress/sidebars/allSidebar.json"
  );
  const sidebar = getSidebar();

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      callback(err);
      return;
    }

    let existingContent = JSON.parse(data);
    const existingSidebar = existingContent.allSidebar.some((item) =>
      item.text.includes(sidebar.text)
    );
    // 存在当天的排行
    if (existingSidebar) {
      callback({
        code: -1,
        message: "当天排行已存在",
      });
      return;
    }
    existingContent.allSidebar.push(sidebar);

    fs.writeFile(
      filePath,
      JSON.stringify(existingContent, null, 2),
      "utf-8",
      (err) => {
        if (err) {
          callback(err);
        } else {
          callback(null, sidebar.text);
        }
      }
    );
  });
}
module.exports = updateSidebarFile;
