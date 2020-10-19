/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: false
  },
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'react/jsx-filename-extension': 0,
    'comma-dangle': [2, 'never']
  }
};
