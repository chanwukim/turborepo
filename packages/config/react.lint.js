/** @type {import("eslint").Linter.Config} */
module.exports = {
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    require.resolve("./base.lint.js"),
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react", "react-hooks"],
  rules: {
    "react/prop-types": "off",
    // React 17 이상에서 불필요
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    // React.memo, React.forwardRef 때문에
    "react/display-name": "off",
    "react/no-unknown-property": "error",

    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "{next,next/**,react,react-dom}", // framework 처리
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "next"],
      },
    ],
  },
};
