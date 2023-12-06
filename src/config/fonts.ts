import { Inter, Noto_Sans_TC } from 'next/font/google';

export const fontSans = Inter({
	variable: '--font-sans',
	adjustFontFallback: true,
	display: 'optional',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export const fontNoto = Noto_Sans_TC({
	variable: '--font-noto',
	adjustFontFallback: true,
	display: 'optional',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});
