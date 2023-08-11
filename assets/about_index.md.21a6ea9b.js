import{_ as s,o as c,c as d,p as l,a,b as e,d as n,e as r}from"./app.e2593a33.js";const _="/high-star/assets/wx.8a109e9e.jpeg",p="/high-star/assets/qq.6822486e.jpeg";const u={},t=o=>(l("data-v-285e6570"),o=o(),a(),o),h={class:"concat"},m=t(()=>e("p",null,[e("span",null,"\u5FAE\u4FE1"),e("img",{src:_,alt:"wx",title:"wx"})],-1)),b=t(()=>e("p",null,[e("span",null,"QQ"),e("img",{src:p,alt:"qq",title:"qq"})],-1)),f=[m,b];function v(o,i){return c(),d("div",h,f)}const g=s(u,[["render",v],["__scopeId","data-v-285e6570"]]),k=r('<h3 id="\u65E0\u9700\u4EBA\u5DE5\u64CD\u4F5C\u7684\u535A\u5BA2" tabindex="-1">\u65E0\u9700\u4EBA\u5DE5\u64CD\u4F5C\u7684\u535A\u5BA2 <a class="header-anchor" href="#\u65E0\u9700\u4EBA\u5DE5\u64CD\u4F5C\u7684\u535A\u5BA2" aria-hidden="true">#</a></h3><ul><li><p><code>\u6280\u672F\u70B9</code></p><ul><li><code>GitHub Pages</code></li><li><code>Github Action</code></li><li><code>NodeJs</code> <code>fs</code>, <code>path</code>, <code>cheerio</code>, <code>moment</code>, <code>nodemailer</code></li><li><code>vitepress</code></li></ul></li><li><p><code>\u5B9E\u73B0</code></p><ul><li>\u4F7F\u7528 <code>vitepress</code> \u628A\u524D\u671F\u7684\u535A\u5BA2\u642D\u5EFA\u5B8C\u6210</li><li>\u51C6\u5907\u597D\u4E00\u4E2A sidebar json \u6587\u4EF6, \u7528\u4E8E\u5199\u5165\u5F53\u5929\u7684\u4FA7\u8FB9\u680F</li><li>\u51C6\u5907\u4E00\u4E2A\u66F4\u65B0\u4FA7\u8FB9\u680F\u7684\u51FD\u6570, \u7528\u4E8E\u83B7\u53D6\u5F53\u524D\u7684\u4FA7\u8FB9\u680F\u5217\u8868\u548C\u65B0\u589E\u4FA7\u8FB9\u680F\u529F\u80FD, \u4E3B\u8981\u662F\u7528\u5230 path, fs \u6A21\u5757, (\u56E0\u4E3A <code>vitepress</code> \u662F\u6253\u5305\u4E4B\u540E\u624D\u4F1A\u53BB\u751F\u6210\u4FA7\u8FB9\u680F, \u672C\u5730\u8C03\u8BD5\u4E0D\u4F1A\u7ACB\u5373\u66F4\u65B0, \u9700\u8981\u89E6\u53D1 github workflow \u4E4B\u540E\u624D\u4F1A\u91CD\u65B0\u66F4\u65B0)</li><li>\u83B7\u53D6<a href="https://github.com/trending/javascript?since=daily" target="_blank" rel="noreferrer">github trending \u6392\u884C</a>. <ul><li>\u7B2C\u4E00\u6B65\u8981\u505A\u7684\u65F6\u5019\u662F\u5148\u53BB\u8C03\u7528 updateSidebar \u51FD\u6570\u53BB\u66F4\u65B0\u4FA7\u8FB9\u680F</li><li>\u7B2C\u4E8C\u6B65\u901A\u8FC7<code>axios</code>\u53BB\u89E3\u6790<code>github trending</code>\u4E2D\u7684<code>DOM</code>,\u8FD9\u91CC\u7528\u5230\u4E86<code>cheerio</code>, \u83B7\u53D6\u5230\u6BCF\u65E5\u7684<code>25</code>\u6761\u6700\u65B0\u7684\u6280\u672F\u5E76\u653E\u5230\u4E00\u4E2A\u6570\u7EC4\u4E2D</li><li>\u7B2C\u4E09\u6B65\u901A\u8FC7\u904D\u5386\u6570\u7EC4, \u8FDB\u884C<code>markdown</code>\u683C\u5F0F\u7684\u6587\u6863\u62FC\u63A5</li><li>\u7B2C\u56DB\u6B65\u901A\u8FC7<code>fs</code>\u6A21\u5757\u751F\u6210\u5BF9\u5E94\u5929\u6570\u7684<code>markdown</code>\u6587\u6863\u5E76\u5199\u5165\u5230\u5BF9\u5E94\u7684\u76EE\u5F55\u4E0B\u9762</li><li>\u6700\u540E\u901A\u8FC7<code>Github Workflow</code>\u8FDB\u884C<code>\u5B9A\u65F6\u89E6\u53D1</code>, <code>\u8BBE\u7F6E\u7CFB\u7EDF\u548C\u73AF\u5883\u53D8\u91CF</code>,\u8FDB\u884C\u6253\u5305\u5E76\u901A\u8FC7<code>Github Pages</code>\u5C06\u5176\u90E8\u7F72\u5230 <code>github pages</code>\u4E2D</li></ul></li></ul></li><li><p><code>github workflow</code></p><ol><li><code>jobs</code>: \u8FD9\u662F\u4E00\u4E2A <code>Workflow</code> \u4E2D\u7684\u4E3B\u8981\u90E8\u5206\uFF0C\u7528\u4E8E\u5B9A\u4E49\u4E00\u4E2A\u6216\u591A\u4E2A\u5DE5\u4F5C<code>\uFF08jobs\uFF09</code>\u3002\u6BCF\u4E2A\u5DE5\u4F5C\u662F\u4E00\u7EC4\u5E76\u884C\u8FD0\u884C\u7684\u4EFB\u52A1\u6B65\u9AA4\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u8FD0\u884C\u73AF\u5883\u4E2D\u6267\u884C\u3002</li><li><code>name</code>: \u8FD9\u662F\u4E00\u4E2A\u5DE5\u4F5C\u7684\u540D\u79F0\uFF0C\u7528\u4E8E\u6807\u8BC6\u4E0D\u540C\u7684\u5DE5\u4F5C\u3002\u5B83\u901A\u5E38\u7528\u4E8E\u5728 <code>Workflow</code> \u9875\u9762\u548C\u65E5\u5FD7\u4E2D\u663E\u793A\u5DE5\u4F5C\u7684\u540D\u79F0\u3002</li><li><code>runs-on</code>: \u8FD9\u4E2A\u5B57\u6BB5\u7528\u4E8E\u6307\u5B9A\u5DE5\u4F5C\u8FD0\u884C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u73AF\u5883\u3002\u4F60\u53EF\u4EE5\u9009\u62E9\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5982 <code>ubuntu-latest\u3001windows-latest\u3001macos-latest</code> \u7B49\u3002</li><li><code>steps</code>: \u5728\u4E00\u4E2A\u5DE5\u4F5C\u4E2D\uFF0Csteps \u5B9A\u4E49\u4E86\u4E00\u7CFB\u5217\u8981\u6267\u884C\u7684\u4EFB\u52A1\u6B65\u9AA4\u3002\u6BCF\u4E2A\u6B65\u9AA4\u6267\u884C\u4E00\u4E2A\u6216\u591A\u4E2A\u547D\u4EE4\u3002</li><li><code>name</code>: \u6B65\u9AA4\u7684\u540D\u79F0\uFF0C\u7528\u4E8E\u6807\u8BC6\u4E0D\u540C\u7684\u6B65\u9AA4\uFF0C\u65B9\u4FBF\u5728 <code>Workflow</code> \u9875\u9762\u548C\u65E5\u5FD7\u4E2D\u663E\u793A\u3002</li><li><code>run</code>: \u5728\u6B65\u9AA4\u4E2D\uFF0Crun \u5B57\u6BB5\u7528\u4E8E\u5B9A\u4E49\u8981\u6267\u884C\u7684\u547D\u4EE4\u3002\u8FD9\u53EF\u4EE5\u662F\u4E00\u4E2A\u5355\u72EC\u7684\u547D\u4EE4\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u811A\u672C\u6587\u4EF6\u7684\u8DEF\u5F84\u3002</li><li><code>env</code>: \u8FD9\u4E2A\u5B57\u6BB5\u7528\u4E8E\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728\u6B65\u9AA4\u4E2D\u4F7F\u7528\u3002\u5B83\u53EF\u4EE5\u662F\u4E00\u4E2A\u952E\u503C\u5BF9\u7684\u96C6\u5408\uFF0C\u4F8B\u5982 <code>env</code>: MY_VARIABLE: &#39;my_value&#39;\u3002</li><li>us<code>es: \u4F7F\u7528\u4E00\u4E2A\u5DF2\u6709\u7684 </code>action` \u6765\u6267\u884C\u7279\u5B9A\u7684\u4EFB\u52A1\u3002Actions \u662F\u4E00\u79CD\u53EF\u91CD\u7528\u7684\u3001\u81EA\u5305\u542B\u7684\u4EFB\u52A1\uFF0C\u53EF\u4EE5\u7528\u4E8E\u591A\u4E2A\u5DE5\u4F5C\u6D41\u3002</li><li><code>with</code>: \u5728 <code>uses</code> \u5B57\u6BB5\u4E2D\uFF0C<code>with</code> \u5B57\u6BB5\u5141\u8BB8\u4F60\u4F20\u9012\u53C2\u6570\u7ED9\u4F7F\u7528\u7684 action\uFF0C\u8FD9\u4E9B\u53C2\u6570\u5C06\u5F71\u54CD action \u7684\u884C\u4E3A\u3002</li></ol></li></ul><h2 id="\u5173\u4E8E\u535A\u4E3B" tabindex="-1">\u5173\u4E8E\u535A\u4E3B <a class="header-anchor" href="#\u5173\u4E8E\u535A\u4E3B" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">\u59D3\u540D</p><p>\u675C\u5146\u6797</p></div><div class="info custom-block"><p class="custom-block-title">\u6027\u522B</p><p>\u7537</p></div><div class="info custom-block"><p class="custom-block-title">\u6BD5\u4E1A\u65F6\u95F4/\u9662\u6821</p><p>2020 \u5E74\u6BD5\u4E1A\u4E8E\u6CB3\u5357\u5DE5\u7A0B\u5B66\u9662/\u673A\u7535\u4E13\u4E1A</p></div><div class="info custom-block"><p class="custom-block-title">\u5DE5\u4F5C</p><p>\u81EA\u7531\u804C\u4E1A, AIGC\u521B\u4E1A</p></div>',7),w={class:"tip custom-block"},x=e("p",{class:"custom-block-title"},"\u8054\u7CFB\u65B9\u5F0F",-1),S=e("p",null,"\u4E00\u8D77\u5B66\u4E60",-1),q=JSON.parse('{"title":"\u65E0\u9700\u4EBA\u5DE5\u64CD\u4F5C\u7684\u535A\u5BA2","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u65E0\u9700\u4EBA\u5DE5\u64CD\u4F5C\u7684\u535A\u5BA2","slug":"\u65E0\u9700\u4EBA\u5DE5\u64CD\u4F5C\u7684\u535A\u5BA2"},{"level":2,"title":"\u5173\u4E8E\u535A\u4E3B","slug":"\u5173\u4E8E\u535A\u4E3B"}],"relativePath":"about/index.md","lastUpdated":1691652563000}'),A={name:"about/index.md"},N=Object.assign(A,{setup(o){return(i,I)=>(c(),d("div",null,[k,e("div",w,[x,S,n(g)])]))}});export{q as __pageData,N as default};
