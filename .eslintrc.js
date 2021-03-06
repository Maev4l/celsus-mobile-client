module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'react-native'],
  parser: 'babel-eslint',
  env: {
    'react-native/react-native': true,
  },
  ignorePatterns: ['__tests__/*.js'],
  rules: {
    'react/prop-types': 'off',
  },
};
