### 无需人工操作的博客

- `技术点`

  - `GitHub Pages`
  - `Github Action`
  - `NodeJs` `fs`, `path`, `cheerio`, `moment`, `nodemailer`
  - `vitepress`

- `实现`

  - 使用 `vitepress` 把前期的博客搭建完成
  - 准备好一个 sidebar json 文件, 用于写入当天的侧边栏
  - 准备一个更新侧边栏的函数, 用于获取当前的侧边栏列表和新增侧边栏功能, 主要是用到 path, fs 模块, (因为 `vitepress` 是打包之后才会去生成侧边栏, 本地调试不会立即更新, 需要触发 github workflow 之后才会重新更新)
  - 获取[github trending 排行](https://github.com/trending/javascript?since=daily).
    - 第一步要做的时候是先去调用 updateSidebar 函数去更新侧边栏
    - 第二步通过`axios`去解析`github trending`中的`DOM`,这里用到了`cheerio`, 获取到每日的`25`条最新的技术并放到一个数组中
    - 第三步通过遍历数组, 进行`markdown`格式的文档拼接
    - 第四步通过`fs`模块生成对应天数的`markdown`文档并写入到对应的目录下面
    - 最后通过`Github Workflow`进行`定时触发`, `设置系统和环境变量`,进行打包并通过`Github Pages`将其部署到 `github pages`中

- `github workflow`

  1. `jobs`: 这是一个 `Workflow` 中的主要部分，用于定义一个或多个工作`（jobs）`。每个工作是一组并行运行的任务步骤，可以在不同的运行环境中执行。
  2. `name`: 这是一个工作的名称，用于标识不同的工作。它通常用于在 `Workflow` 页面和日志中显示工作的名称。
  3. `runs-on`: 这个字段用于指定工作运行的操作系统环境。你可以选择不同的操作系统，如 `ubuntu-latest、windows-latest、macos-latest` 等。
  4. `steps`: 在一个工作中，steps 定义了一系列要执行的任务步骤。每个步骤执行一个或多个命令。
  5. `name`: 步骤的名称，用于标识不同的步骤，方便在 `Workflow` 页面和日志中显示。
  6. `run`: 在步骤中，run 字段用于定义要执行的命令。这可以是一个单独的命令，也可以是一个脚本文件的路径。
  7. `env`: 这个字段用于设置环境变量，可以在步骤中使用。它可以是一个键值对的集合，例如 `env`: MY_VARIABLE: 'my_value'。
  8. us`es: 使用一个已有的 `action` 来执行特定的任务。Actions 是一种可重用的、自包含的任务，可以用于多个工作流。
  9. `with`: 在 `uses` 字段中，`with` 字段允许你传递参数给使用的 action，这些参数将影响 action 的行为。


## 关于博主

::: info 姓名
杜兆林
:::

::: info 性别
男
:::

::: info 毕业时间/院校
2020 年毕业于河南工程学院/机电专业
:::

::: info 工作
自由职业, AIGC创业
:::

<script setup>
import ConcatComp from '../../components/concat.vue'
</script>

::: tip 联系方式
一起学习
<concat-comp />
:::
