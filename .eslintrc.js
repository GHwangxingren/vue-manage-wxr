module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  /**
   * 0 or 'off': 关闭规则
   * 1 or 'warn': 打开规则，并且作为一个警告，字体颜色为黄色（并不会导致检查不通过）
   * 2 or 'error': 打开规则，并且作为一个错误 ，色体颜色为红色(退出码为1，检查不通过)
   */
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": ["off", "always"], // 函数定义时括号前面要有空格 - 关闭
    "no-spaced-func": "error", // 函数调用时 函数名与()之间不能有空格
    "no-const-assign": "error", // 禁止修改const声明的变量
    "comma-dangle": ["error", "never"], // 对象字面量项尾不能有逗号
    indent: "off", // 缩进风格
    camelcase: "off", //强制驼峰法命名 - 关闭
    "no-var": "error", //禁用var，用let和const代替
    "no-unused-vars": "off", // 关闭不能有声明后未被使用的变量或参数
    "no-with": "error", // 禁用with
    "arrow-parens": "off", // 箭头函数用小括号括起来 - 关闭
    "no-alert": "off", //禁止使用alert confirm prompt - 关闭
    "require-atomic-updates": "off",
    "vue/attribute-hyphenation": ["error", "always"], // vue属性连子
    "vue/prop-name-casing": ["warn", "camelCase"], // props必须为小驼峰式
    "no-prototype-builtins": "off", // 不可直接使用Object.prototype属性方法
    "vue/order-in-components": [
      // 组件属性顺序规范
      "error",
      {
        order: [
          "el",
          "name",
          ["components", "directives"],
          "extends",
          "mixins",
          "filters",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "data",
          "computed",
          "watch",
          [
            "beforeCreate",
            "created",
            "beforeMount",
            "mounted",
            "beforeUpdate",
            "updated",
            "activated",
            "deactivated",
            "beforeDestroy",
            "destroyed"
          ],
          "methods",
          "head",
          ["template", "render"],
          "renderError"
        ]
      }
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
