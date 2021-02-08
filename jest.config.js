module.exports = {
  testRegex: '((\\.|/*.)(test))\\.js?$',
  setupFilesAfterEnv: ['<rootDir>/src/__test__/setupTest.js'],
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/public/$1',
    '^.+\\.svg$': '<rootDir>/public/$1',
    '^~/__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
    '^~/__test__/(.*)$': '<rootDir>/src/__test__/$1',
    '^~/components/(.*)$': '<rootDir>/src/components/$1',
    '^~/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^~/config/(.*)$': '<rootDir>/src/config/$1',
    '^~/api/(.*)$': '<rootDir>/src/config/api/$1',
    '^~/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^~/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^~/firebase/(.*)$': '<rootDir>/src/config/firebase/$1',
    '^~/constants/(.*)$': '<rootDir>/src/config/constants/$1',
    '^~/styles/(.*)$': '<rootDir>/src/config/styles/$1'
  },
  testPathIgnorePatterns: [
    '<rootDir>/src/__mocks__/',
    '<rootDir>/src/config/styles/'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  verbose: true,
  snapshotSerializers: ['enzyme-to-json/serializer']
};
