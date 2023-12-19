import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

function animationDelay({ matchUtilities, theme }: { matchUtilities: any, theme: any }) {
	matchUtilities(
		{
			'animation-delay': (value: string) => ({
				'animation-delay': `calc(${value} * 130ms)`,
			}),
		},
		{ values: theme('animationDelay') }
	);
}

export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		screens: {
			xs: '500px',
			sm: '650px',
			md: '768px',
			lg: '1024px',
		},
		fontFamily: {
			sans: [
				'var(--font-sans)',
				'var(--font-noto)',
				...defaultTheme.fontFamily.sans,
			],
		},
		extend: {
			colors: {
				primary: colors.blue,
				accent: colors.teal,
				base: {
					...colors.neutral,
					'950': '#0f0f0f',
				},
			},
			animationDelay: {
				'1': '1',
				'2': '2',
				'3': '3',
				'4': '4',
			},
			keyframes: ({ theme }) => ({
				in: {
					'0%': { transform: 'translateY(18px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'in-reverse': {
					'0%': { transform: 'translateY(-18px)', opacity: '0' },
					'100%': { transform: 'translateY(0px)', opacity: '1' },
				},
				mutation: {
					'0%': {
						background: theme('colors.primary.200 / 3%'),
					},
					'10%': {
						background: theme('colors.primary.200 / 15%'),
						color: theme('colors.primary.200 / 75%'),
					},
					'100%': {
						background: theme('colors.primary.200 / 0%'),
					},
				},
				loading: {
					'0%': { opacity: '.2' },
					'20%': { opacity: '1', transform: 'translateX(1px)' },
					to: { opacity: '.2' },
				},
			}),
			animation: {
				in: 'in .6s both',
				'in-reverse': 'in-reverse .6s both',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		animationDelay,
	],
} satisfies Config;
