/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

const configs =  {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
		},
		fontFamily: {
			'sans': [
				'var(--font-space)',
				'var(--font-noto)',
				...defaultTheme.fontFamily.sans,
			],
		},
		fontWeight: {
			'light': '300',
			'normal': '400',
			'medium': '500',
			'bold': '700',
		},
		colors: {
			primary: {
				'50': '#eef2ff',
				'100': '#e0e7ff',
				'200': '#c7d2fe',
				'300': '#a5b4fc',
				'400': '#818cf8',
				'500': '#6366f1',
				'600': '#4f46e5',
				'700': '#4338ca',
				'800': '#3730a3',
				'900': '#312e81',
				'950': '#1e1b4b',
			},
			secondary: {
				'50': '#f0fdfa',
				'100': '#ccfbf1',
				'200': '#99f6e4',
				'300': '#5eead4',
				'400': '#2dd4bf',
				'500': '#14b8a6',
				'600': '#0d9488',
				'700': '#0f766e',
				'800': '#115e59',
				'900': '#134e4a',
				'950': '#042f2e',
			},
			base: {
				'50': '#fafafa',
				'100': '#f4f4f5',
				'200': '#e4e4e7',
				'300': '#d4d4d8',
				'400': '#a1a1aa',
				'500': '#71717a',
				'600': '#52525b',
				'700': '#3f3f46',
				'800': '#27272a',
				'900': '#18181b',
				'950': '#131316',
			},
			transparent: 'transparent',
		},
		extend: {
			boxShadow: {
				'card': '0px 2px 20px rgba(99, 102, 241, 0.20)',
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss/nesting'),
	],
};

export default configs;
