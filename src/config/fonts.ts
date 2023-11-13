import { Inter } from 'next/font/google';

export const fontSans = Inter({
	variable: '--font-sans',
	adjustFontFallback: true,
	fallback: [
		'ui-sans-serif',
		'system-ui',
		'-apple-system',
		'BlinkMacSystemFont',
		'Segoe UI',
		'Roboto',
		'Helvetica Neue',
		'Arial',
		'Noto Sans',
		'sans-serif',
		'Apple Color Emoji',
		'Segoe UI Emoji',
		'Segoe UI Symbol',
		'Noto Color Emoji',
	],
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});
