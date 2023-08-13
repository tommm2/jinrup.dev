import { Metadata } from 'next';
import { Noto_Sans_TC, Space_Grotesk } from 'next/font/google';
import clsx from 'clsx';

import Navbar from '@/components/Navbar';
import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

import '../styles/app.css';

const noto_sans_tc = Noto_Sans_TC({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-noto',
	display: 'swap',
});

const space = Space_Grotesk({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-space',
	display: 'swap',
});

export const metadata: Metadata = {
	title: {
		default: 'Tom Jin',
		template: '%s - Tom Jin',
	},
	description: 'Tom Jin 的個人網站',
	openGraph: {
		title: 'Tom jin',
		description: 'Tom Jin 的個人網站',
		url: 'https://tomjin.dev',
		siteName: 'Tom Jin',
		images: [],
		locale: 'zh-tw',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	// icons: {
	// 	shortcut: '',
	// },
};

type Props = {
	children: React.ReactNode
}

function RootLayout({ children }: Props) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={clsx(
				space.variable,
				noto_sans_tc.variable,
				'font-sans'
			)}>
				<ThemeProvider>
					<div className='layout'>
						<Navbar />
						<main className='mt-8 min-h-[90vh] sm:mt-12'>
							{children}
						</main>
						<Footer />
					</div>
					<BackToTop />
				</ThemeProvider>
			</body>
		</html>
	);
}

export default RootLayout;
