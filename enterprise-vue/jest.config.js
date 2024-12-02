module.exports = {
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest'
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'vue'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    }
  };
  