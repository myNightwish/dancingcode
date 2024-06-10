module.exports = {
  // 在根目录下寻找.eslintrc.js文件，如果当前工作区打开的项目不是在根目录，
  // 则查找.eslintrc.js文件会失败，且eslint检查也不会生效
  root: true,
  env: {
    // browser: true,
    node: true, // 添加对 Node.js 全局变量和作用域的支持
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended' // 冲突时使用prettier的规则进行覆盖
  ],
  // 这项不设置，会导致require等语法提示飘红
  parserOptions: {
    ecmaVersion: 2020, // 设置 ES 版本
    sourceType: 'module' // 如果使用 import/export
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/multi-word-component-names': 'off', // 不校验组件名
    'vue/no-multiple-template-root': 0, // 不需要使用根元素包裹template的内容
    'prettier/prettier': [
      'off',
      {
        trailingComma: 'none', // 不添加尾随逗号
        singleQuote: true, // 单引号
      }
    ]
  }
};
