// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // 如果我们希望在每个 js 代码每一个表达式的结尾都以分号结尾，则在 rules 字段增加配置： ‘semi’: [“error”, “always”] ，否则 eslint 会给出错误提示。
    'semi': 0,
    'space-before-function-paren': 0,
    'indent':['off',2],
    'singleQuote': 0,
    'trailingComma': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
