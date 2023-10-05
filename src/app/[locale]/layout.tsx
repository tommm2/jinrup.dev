import { Metadata } from 'next';
import { Noto_Sans_TC, Barlow } from 'next/font/google';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import Navbar from '@/components/Navbar';
import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

import { locales } from '@/lib/navigation';

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
		url: 'https://tomjin.vercel.app',
		siteName: 'Tom Jin',
		images: [],
		locale: 'zh-TW',
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

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
	children: React.ReactNode;
	params: { locale: string };
}

function RootLayout({ children, params }: RootLayoutProps) {
	const locale = useLocale();

	if (params.locale !== locale) {
		notFound();
	}

	return (
		<html
			lang={locale}
			suppressHydrationWarning
		>
			<body className={`${barlow.variable} ${noto_sans_tc.variable}`}>
				<ThemeProvider>
					<Navbar />
					<main className='layout overflow-hidden md:mt-12'>{children}</main>
					<Footer />
					<BackToTop />
				</ThemeProvider>
			</body>
		</html>
	);
}

export default RootLayout;
