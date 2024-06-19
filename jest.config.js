const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'next-intl': '<rootDir>/src/components/__mocks__/next-intl.ts',
		'^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@/components/(.*)$': '<rootDir>/src/components/$1',
		'^@/config/(.*)$': '<rootDir>/src/config/$1',
	},
};

module.exports = createJestConfig(config);
