import { Metadata, Viewport } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import BackToTop from '@/components/back-to-top';
import Footer from '@/components/footer';
import Header from '@/components/header';

import { locales } from '@/lib/navigation';

import { cn } from '@/utils/cn';
import { getLocalizedUrl } from '@/utils/url';

import { fontNoto, fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';

export const viewport: Viewport = {
	themeColor: {
		color: '#060609',
	},
};

export async function generateMetadata({
	params,
}: {
	params: { locale: Locale };
}): Promise<Metadata> {
	const t = await getTranslations('homePage');
	const url = getLocalizedUrl({ locale: params.locale });

	return {
		metadataBase: new URL(siteConfig.siteUrl),
		title: {
			default: siteConfig.name,
			template: `%s - ${siteConfig.name}`,
		},
		creator: siteConfig.name,
		description: t('description'),
		openGraph: {
			...siteConfig.openGraph,
			url,
			locale: params.locale,
			description: t('description'),
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
		alternates: {
			canonical: url,
		},
		icons: {
			icon: '/favicon.ico',
			shortcut: '/favicon-32x32.png',
			apple: '/apple-touch-icon.png',
		},
		manifest: '/manifest.json',
	};
}

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
	children: React.ReactNode;
	params: { locale: string };
};

function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
	if (!locales.includes(locale as any)) {
		notFound();
	}

	unstable_setRequestLocale(locale);

	return (
		<html
			className={cn(fontSans.variable, fontNoto.variable)}
			lang={locale}
		>
			<body className='min-h-screen overflow-x-hidden antialiased'>
				<Header />
				<main className='layout mt-12 min-h-[calc(100vh_-_56px_-_196px)]'>
					{children}
				</main>
				<Footer />
				<BackToTop />
			</body>
		</html>
	);
}

export default LocaleLayout;
