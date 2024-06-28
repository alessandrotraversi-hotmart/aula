module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ['unicorn'],
  rules: {
    "unicorn/no-static-only-class": "ignore",
    "unicorn/no-extraneous-class": "ignore"
  },
};
