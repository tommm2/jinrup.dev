import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			xs: '500px',
			sm: '650px',
			md: '768px',
			lg: '1024px',
		},
		fontWeight: {
			light: '300',
			normal: '400',
			medium: '500',
			bold: '700',
		},
		fontFamily: {
			sans: [
				'var(--font-sans)',
				...defaultTheme.fontFamily.sans,
			],
		},
		extend: {
			colors: {
				primary: colors.blue,
				accent: colors.sky,
				base: colors.neutral,
			},
			keyframes: {
				in: {
					'0%': { transform: 'translateY(18px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'in-reverse': {
					'0%': { transform: 'translateY(-18px)', opacity: '0' },
					'100%': { transform: 'translateY(0px)', opacity: '1' },
				},
			},
			animation: {
				in: 'in .6s both',
				'in-reverse': 'in-reverse .6s both',
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
} satisfies Config;
