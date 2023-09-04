const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
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
		fontWeight: {
			'light': '300',
			'normal': '400',
			'medium': '500',
			'bold': '700',
		},
		fontFamily: {
			'body': ['var(--font-barlow)', 'var(--font-noto)'],
		},
		extend: {
			colors: {
				'primary': colors.purple,
				'secondary': colors.blue,
				'base': colors.zinc,
			},
			boxShadow: {
				'card': '0px 2px 20px rgba(168, 85, 247, 0.2)',
			},
			animation: {
				'wave': 'wave 6s linear infinite',
			},
			keyframes: {
				'wave': {
					'0%': {
						'transform': 'translate(-50%, 0) rotateZ(0deg)',
					},
					'50%': {
						'transform': 'translate(-50%, -2%) rotateZ(180deg)',
					},
					'100%': {
						'transform': 'translate(-50%, 0%) rotateZ(360deg)',
					},
				},
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
