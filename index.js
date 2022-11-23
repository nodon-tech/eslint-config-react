module.exports = {
  "plugins": [
    'react-hooks'
  ],
  "extends": [
    'plugin:react/recommended',
    '@allbin/eslint-config',
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
