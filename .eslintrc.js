// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ["jsx-a11y"],
  "rules": {
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "class-methods-use-this": 0,
    "react/prop-types": 1,
    "react/no-unused-prop-types": 1,
    "react/jsx-props-no-multi-spaces": 1,
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-tag-spacing": "warn",
    "space-infix-ops": ["warn", { "int32Hint": false }],
    "object-curly-spacing": ["warn", "always"],
    "array-bracket-spacing": ["warn", "never"],
    "space-in-parens": ["warn", "never"],
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "computed-property-spacing": ["warn", "never"],
    "keyword-spacing": ["warn", {
      "before": true,
      "after": true,
      "overrides": { "if": { "after": false }, "for": { "after": false }, "while": { "after": false } },
    }],
    "arrow-spacing": ["warn", { "before": true, "after": true }],
    "block-spacing": "warn",
    "key-spacing": ["warn", { "beforeColon": false }],
    "semi-spacing": ["warn", { "before": false, "after": true }],
    "no-extra-semi": "warn",
    "func-call-spacing": ["warn", "never"],
    "space-before-function-paren": ["warn", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always",
    }],
    "comma-dangle": ["warn", {
      "arrays": "always-multiline",
      "exports": "always-multiline",
      "functions": "never",
      "imports": "always-multiline",
      "objects": "always-multiline",
    },
    ],
    "func-names": 0,
    "function-paren-newline": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1,
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": [
          "Link",
        ],
        "specialLink": [
          "to",
        ],
      },
    ],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-for": [
      2,
      {
        "allowChildren": false,
        "components": [
          "Label",
        ],
        "required": {
          "some": [
            "nesting",
            "id",
          ],
        },
      },
    ],
    "jsx-quotes": [
      2,
      "prefer-single",
    ],
    "linebreak-style": 0,
    "new-cap": 0,
    "no-plusplus": 0,
    "no-return-assign": 0,
    "no-underscore-dangle": [
      2,
      {
        "allowAfterThis": true,
      },
    ],
    "prefer-destructuring": 0,
    "quote-props": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": 0,
    // "react/jsx-curly-spacing": [
    //   "warn",
    //   "always",
    // ],
    "react/jsx-filename-extension": 0,
    "react/jsx-indent": [
      "warn",
      2,
    ],
    "react/jsx-indent-props": [
      "warn",
      2,
    ],
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "template-curly-spacing": [
      2,
      "always",
    ],
  },
};
