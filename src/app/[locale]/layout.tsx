import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale, getTranslator } from 'next-intl/server';

import BackToTop from '@/components/back-to-top';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { locales } from '@/lib/navigation';
import { cn } from '@/utils/cn';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';

import '@/styles/app.css';

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: Locale };
}): Promise<Metadata> {
	const t = await getTranslator(locale, 'homePage');

	return {
		title: {
			default: siteConfig.name,
			template: `%s - ${siteConfig.name}`,
		},
		creator: siteConfig.name,
		description: t('description'),
		openGraph: {
			type: 'website',
			locale,
			title: siteConfig.name,
			description: t('description'),
			url: siteConfig.siteUrl,
			siteName: siteConfig.name,
			images: [],
		},
		themeColor: { media: '(prefers-color-scheme: dark)', color: 'black' },
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
		alternates: {
			canonical: siteConfig.siteUrl,
			// types: {
			// 	'application/rss+xml': [{ url: 'https://nextui.org/feed.xml', title: 'NextUI RSS Feed' }],
			// },
		},
		// manifest: '',
		// icons: {
		// 	shortcut: '',
		// },
	};
}

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
	children: React.ReactNode;
	params: { locale: string };
}

const LocaleLayout = ({ children, params: { locale } }: LocaleLayoutProps) => {
	const isValidLocale = locales.some((current) => current === locale);

	if (!isValidLocale) notFound();

	unstable_setRequestLocale(locale);

	return (
		<html
			lang={locale}
			suppressHydrationWarning
		>
			<body
				className={cn(
					'min-h-screen bg-base-900 font-sans text-base-200 antialiased overflow-x-hidden',
					fontSans.variable,
				)}
			>
				<Navbar />
				{children}
				<Footer />
				<BackToTop />
			</body>
		</html>
	);
};

export default LocaleLayout;
