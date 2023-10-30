const config = {
  testEnvironment: 'jsdom',
  testRegex: '/__tests__/.*-test?\\.(j|t)sx?$',
  transform: {
    '^.+\\.js.?$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules'],
  coverageReporters: ['text', 'cobertura', 'html', 'json'],
  modulePaths: ['<rootDir>/src']
};

module.exports = config;
