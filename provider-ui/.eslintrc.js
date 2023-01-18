module.exports = {
  settings: {
    react: {
      version: 'detect',
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@next/next/recommended',
  ],
  overrides: [
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  'parser': '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    requireConfigFIle: false,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'cypress'
  ],
  rules: {
    "arrow-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": [
      "error",
      "1tbs"
    ],
    "react/react-in-jsx-scope": "off",
    "no-undef": "error",
    "react/prop-types": 0,
    "react/jsx-uses-vars": [
      2
    ],
    "react/jsx-no-undef": "error",
    "no-console": 0,
    "no-unused-vars": "error",
    "react/jsx-key": "warn",
    "no-dupe-keys": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@mui/*/*/*"]
      }
    ]
  }
}
