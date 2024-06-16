//配置参照 https://prettier.io/docs/en/options.html
module.exports = {
    tabWidth: 4, // tab 使用两个空格
    endOfLine: "auto", // 保持现有的行尾
    useTabs: false, // 不使用制表符缩进，使用空格缩进
    semi: true, // 代码需要分号结尾
    singleQuote: true, // 单引号
    bracketSpacing: true, // 对象左右两侧需要空格
    jsxBracketSameLine: false, // html 关闭标签换行
    arrowParens: 'avoid', // 单参数的箭头函数参数不需要括号
    trailingComma: "none" // 不添加尾随逗号
}
