module.exports = {
  plugins: [
    'react-hooks'
  ],
  extends: [
    'plugin:react/recommended',
    '@nodon-tech/eslint-config',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
