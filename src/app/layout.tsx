import { Metadata } from 'next';
import { Noto_Sans_TC, Barlow } from 'next/font/google';
import clsx from 'clsx';

import Navbar from '@/components/Navbar';
import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

import '@/styles/app.css';

const barlow = Barlow({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-barlow',
	display: 'swap',
});

const noto_sans_tc = Noto_Sans_TC({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-noto',
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

interface RootLayoutProps {
	children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={clsx(
				barlow.variable,
				noto_sans_tc.variable,
				'bg-base-100 font-body text-base-700 antialiased dark:bg-base-950 dark:text-base-300'
			)}>
				<ThemeProvider>
					<div className='mx-auto max-w-3xl px-6'>
						<Navbar />
						<main className='mt-8 flex flex-col gap-12 md:mt-12'>
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
