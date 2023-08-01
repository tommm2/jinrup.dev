module.exports = {
	root: true,
	extends: [
		'next/core-web-vitals',
		'plugin:tailwindcss/recommended',
	],
	rules: {
		'no-console': 'warn',
		'quotes': ['error', 'single'],
		'semi': 'error',
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
		'newline-after-var': 'error',
		'object-curly-spacing': ['error', 'always'],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'space-in-parens': ['error', 'never'],
		'space-before-blocks': 'error',
		'arrow-spacing': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'space-infix-ops': 'error',
		'comma-dangle': ['error', 'always-multiline'],
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
};
