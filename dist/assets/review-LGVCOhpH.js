import{d as e,o as t,c as r,a as b}from"./index-CGNilQZr.js";const c={class:"markdown-body"},n=b("<h1>评审规范</h1><h2>评审规范</h2><blockquote><p>评审点<br> 编码规范<br> 1：Eslit和stylelint是否通过<br> 2：是否删除启用代码，包括console和debugger<br> 3：是否重复、是否使用已存在的工具<br> 4：是否符合项目约定</p></blockquote><blockquote><p>业务实现<br> 1：也无需求是否实现<br> 2：代码逻辑问题，是否有隐藏的逻辑漏洞<br> 3：是否存在浏览器报错警告</p></blockquote><blockquote><p>安全性能<br> 1：是否存在安全漏洞：undefined判断问题，异常捕获问题，内存泄漏问题<br> 2：是否存在性能问题：可能的无限循环或循环浪费、防抖节流，缓存等<br> 3：是否存在体验问题：请求是否有loading、hover是否有提示等</p></blockquote><blockquote><p>注释：<br> 1：是否存在必要的注释<br> 2：注释是否清晰无疑义<br> 3：注释格式是否规范</p></blockquote><blockquote><p>代码设计<br> 1：代码实现或代码设计是否有值得推广借鉴的地方<br> 2：是否有新技术使用或创新点<br> 3：代码设计是否能优化，提升性能，可读性，健壮性</p></blockquote><blockquote><p>评审产出<br> 1：代码管理平台需要有评审记录<br> 2：需要有文档记录评审结果，如项目wiki平台等。</p></blockquote>",8),s=[n],i={},k="",d=e({__name:"review",setup(l,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(p,a)=>(t(),r("div",c,s))}});export{d as default,k as excerpt,i as frontmatter};