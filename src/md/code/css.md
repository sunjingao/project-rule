# CSS规范

## 说明
使用推荐的Stylelint配置即可，根据团队习惯，进行部分自定义改造

### stylelint配置

stylelint.config.cjs
```js
module.exports = {
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
```
