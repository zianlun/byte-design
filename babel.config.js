// babel.config.js
module.exports = {
    // 执行顺序由右往左,所以先处理ts,再处理jsx,最后再试一下babel转换为低版本语法
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
          "corejs": 3 // 配置使用core-js使用的版本
        }
      ],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
}