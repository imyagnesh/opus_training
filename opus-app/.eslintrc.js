module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:react/recommended', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['babel', 'import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/forbid-prop-types': [0]
  }
};
