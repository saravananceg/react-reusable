module.exports = {
  testEnvironment: 'jsdom',
  testRegex: '/__tests__/.*-tests?\\.(j|t)sx?$',
  transform: {
    '^.+\\.js.?$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(fuse.js|semver-regex|@nc-components|@lit|lit*)/)'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**']
};
