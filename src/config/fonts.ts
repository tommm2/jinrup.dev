import localFont from 'next/font/local';
import { Noto_Sans_TC } from 'next/font/google';

export const fontMono = localFont({
	src: [
		{ path: '../../public/fonts/HackNerdFont-Regular.ttf', weight: '400' },
		{ path: '../../public/fonts/HackNerdFont-Bold.ttf', weight: '700' },
	],
	variable: '--font-mono',
	display: 'swap',
});

export const fontNoto = Noto_Sans_TC({
	variable: '--font-noto',
	display: 'swap',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});
