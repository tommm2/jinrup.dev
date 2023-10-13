import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import clsx from 'clsx';

import BackToTop from '@/components/back-to-top';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { fontSans } from '@/config/fonts';
import { locales } from '@/lib/navigation';

import '@/styles/app.css';

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
	themeColor: {
		media: '(prefers-color-scheme: dark)',
		color: '#171717',
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

interface LocaleLayoutProps {
	children: React.ReactNode;
	params: { locale: string }
}

const LocaleLayout = ({
	children,
	params: { locale },
}: LocaleLayoutProps) => {
	const isValidLocale = locales.some((current) => current === locale);

	if (!isValidLocale) notFound();

	unstable_setRequestLocale(locale);

	return (
		<html
			lang={locale}
			suppressHydrationWarning
		>
			<body className={clsx('min-h-screen bg-base-900 font-sans text-base-300 antialiased', fontSans.variable)}>
				<Navbar />
				{children}
				<Footer />
				<BackToTop />
			</body>
		</html>
	);
};

export default LocaleLayout;
