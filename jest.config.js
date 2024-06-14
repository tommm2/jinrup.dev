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
	},
};

module.exports = createJestConfig(config);
