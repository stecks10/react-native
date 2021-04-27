module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/react'
  ],
  globals: {
    Atomic: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  paser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [ '.jxs', '.js']
      }
    ],
    'import/prefer-default-export': 'off'
  },

};
