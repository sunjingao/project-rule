import{d as t,o as n,c as o,b as e}from"./index-B4qzi52p.js";const l={class:"markdown-body"},r=e("h1",null,"CSS规范",-1),i=e("h2",null,"说明",-1),c=e("p",null,"使用推荐的Stylelint配置即可，根据团队习惯，进行部分自定义改造",-1),a=e("h3",null,"stylelint配置",-1),u=e("p",null,"stylelint.config.cjs",-1),d=e("pre",null,[e("code",{class:"language-js"},`module.exports = {
    /* 继承某些已有的规则 */
    extends: [
        "stylelint-config-standard",
        "stylelint-config-html/vue",
        "stylelint-config-recess-order"
    ],
    plugins: ["stylelint-scss", "stylelint-order", "stylelint-prettier"],
    overrides: [
        {
            files: ["**/*.(css|html|vue)"],
            customSyntax: "postcss-html"
        },
        {
            files: ["*.scss", "**/*.scss"],
            customSyntax: "postcss-scss",
            extends: [
                "stylelint-config-standard-scss",
                "stylelint-config-recommended-vue/scss"
            ]
        }
    ],
    rules: {
        "prettier/prettier": true,
        "selector-class-pattern": null,
        "no-descending-specificity": null,
        "scss/dollar-variable-pattern": null,
        // 允许空文件
        'no-empty-source': 'off',
        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["deep", "global"]
            }
        ],
        "selector-pseudo-element-no-unknown": [
            true,
            {
                ignorePseudoElements: ["v-deep", "v-global", "v-slotted"]
            }
        ],
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: [
                    "apply",
                    "variants",
                    "responsive",
                    "screen",
                    "function",
                    "if",
                    "each",
                    "include",
                    "mixin",
                    "use",
                    "tailwind"
                ]
            }
        ],
        "scss/at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": ["tailwind"]
            }
        ],
        "rule-empty-line-before": [
            "always",
            {
                ignore: ["after-comment", "first-nested"]
            }
        ],
        "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }],
        "order/order": [
            [
                "dollar-variables",
                "custom-properties",
                "at-rules",
                "declarations",
                {
                    type: "at-rule",
                    name: "supports"
                },
                {
                    type: "at-rule",
                    name: "media"
                },
                "rules"
            ],
            { severity: "warning" }
        ]
    },
    ignoreFiles: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx", "report.html"]
};
`)],-1),p=[r,i,c,a,u,d],g={},h="",v=t({__name:"css",setup(m,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(_,f)=>(n(),o("div",l,p))}});export{v as default,h as excerpt,g as frontmatter};
