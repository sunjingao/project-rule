import{d as s,o as t,c as o,b as n}from"./index-B4qzi52p.js";const c={class:"markdown-body"},l=n("h1",null,"CommitLint配置",-1),a=n("p",null,"通过配置，可以管理JIRA版本，进行代码量统计分析",-1),r=n("h2",null,"自定义配置",-1),_=n("p",null,"commitlint.config.cjs文件内容：",-1),d=n("pre",null,[n("code",{class:"language-js"},`module.exports = {
    extends: ['./commitlint.local.cjs']
};
`)],-1),i=n("p",null,"commitlint.local.cjs文件内容：",-1),m=n("pre",null,[n("code",{class:"language-js"},`module.exports = {
    rules: {
        // 添加规则
        'header-self': [2, 'always']
    },
    plugins: [
        // 定义插件
        {
            rules: {
                // 定义规则
                'header-self':
                    ({header}) => {
                        const pass = /^JIRA_\\d{4} /.test(header)
                        const message = \`需要以JIRA_四个数字 开头\`
                        return [pass, message]
                    }
            }
        }
    ]
}
`)],-1),p=[l,a,r,_,d,i,m],x={},j="",k=s({__name:"commitLint",setup(u,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(h,f)=>(t(),o("div",c,p))}});export{k as default,j as excerpt,x as frontmatter};
