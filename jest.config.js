const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(config);
