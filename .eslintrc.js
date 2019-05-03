module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    babelOptions: {
      configFile: "babel.config.js"
    }
  },
  plugins: ["react", "react-native"],
  rules: {}
};
