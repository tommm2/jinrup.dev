import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
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
				primary: colors.cyan,
				secondary: colors.blue,
				base: colors.neutral,
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
