const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "import", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-implicit-coercion": "error", // 암시적 타입 변환을 금지
    curly: ["error", "all"], // 모든 제어문 중괄호
    eqeqeq: ["error", "always", { null: "ignore" }], // 동등 비교(===, !==)를 사용. null 제외

    "import/order": [
      "error",
      {
        "newlines-between": "always", // 항상 새 줄
        alphabetize: {
          order: "asc", // import를 알파벳 오름차순으로 정렬
          caseInsensitive: true, // 정렬 시 대소문자 구분 안 함
        },
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
      },
    ],

    "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        selector: "variable",
        leadingUnderscore: "allow",
      },
      { format: ["camelCase", "PascalCase"], selector: "function" },
      { format: ["PascalCase"], selector: "interface" },
      { format: ["PascalCase"], selector: "typeAlias" },
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "public-static-field",
          "private-static-field",
          "public-instance-field",
          "private-instance-field",
          "public-constructor",
          "private-constructor",
          "public-instance-method",
          "private-instance-method",
        ],
      },
    ],
  },
};
