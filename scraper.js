const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const moment = require("moment");
const path = require("path");
const cron = require("node-cron");
const updateSidebarFile = require("./updateSidebar");

require("moment/locale/zh-cn");
moment.locale("zh-cn");

const trendingUrl = "https://github.com/trending/javascript?since=daily";

axios.default.timeout = 10000;

function parseProjectsFromHtml(html) {
  const $ = cheerio.load(html);
  const projects = [];

  $(".Box-row").each((index, element) => {
    const title = $(element).find(".h3").text().trim();
    const description = $(element).find(".col-9").text().trim();
    const language = $(element)
      .find(".f6.color-fg-muted.mt-2 span.d-inline-block.ml-0.mr-3")
      .text()
      .trim();
    const starCount = $(element).find('a[href*="stargazers"]').text().trim();
    const forkCount = $(element).find('a[href*="forks"]').text().trim();

    const link = "https://github.com" + $(element).find("a").attr("href");

    projects.push({ title, description, forkCount, link, starCount, language });
  });

  return projects;
}

function generateMarkdown(projects) {
  let markdown =
    "### GitHub Trending" +
    moment().format("LLLL") +
    "\n\n ---------------------\n\n";

  projects.forEach((project, index) => {
    markdown +=
      "::: info  " +
      (index + 1) +
      ".  " +
      "[" +
      project.title.replace(/\s+/g, " ") +
      "](" +
      project.link +
      ")   " +
      "\n------------\n" +
      "**desc:**  `" +
      project.description +
      "`\n" +
      "\n------------\n" +
      "**language:**  `" +
      project.language +
      "`-----------" +
      "**star:**  `" +
      project.starCount +
      "`-----------" +
      "**fork:**  `" +
      project.forkCount +
      "`\n" +
      ":::\n\n" +
      "\n------------\n";
  });

  return markdown;
}

const task = cron.schedule("0 11 * * *", init, {
  scheduled: true,
  timezone: "Asia/Shanghai", // 设置时区为杭州
});

function init() {
  updateSidebarFile((err, today) => {
    if (err) {
      console.log("err触发 :>> ", err);
    } else {
      console.log("chufa");
      axios
        .get(trendingUrl)
        .then((response) => {
          // 解析 HTML 页面，提取项目信息
          const projectList = parseProjectsFromHtml(response.data);
          const markdown = generateMarkdown(projectList);
          fs.writeFileSync(
            path.join(__dirname, `/docs/statistics/${today}.md`),
            markdown,
            "utf-8"
          );
          console.log("Markdown file generated successfully.");
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  });
}
