# CommitLint配置
通过配置，可以管理JIRA版本，进行代码量统计分析

## 自定义配置

commitlint.config.cjs文件内容：
```js
module.exports = {
    extends: ['./commitlint.local.cjs']
};
```

commitlint.local.cjs文件内容：
```js
module.exports = {
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
                        const pass = /^JIRA_\d{4} /.test(header)
                        const message = `需要以JIRA_四个数字 开头`
                        return [pass, message]
                    }
            }
        }
    ]
}
```
