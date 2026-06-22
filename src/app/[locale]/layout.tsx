import { Metadata, Viewport } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import ScrollToTop from '@/components/scroll-to-top';
import Footer from '@/components/footer';
import Header from '@/components/header';
import LocaleProvider from '@/providers/locale-provider';
import ThemeProvider from '@/providers/theme-provider';
import { fontMono, fontNoto } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { locales } from '@/lib/navigation';
import { cn } from '@/utils/cn';
import { getLocalizedUrl } from '@/utils/url';

import '@/styles/app.css';

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#f8f6f1' },
		{ media: '(prefers-color-scheme: dark)', color: '#060609' },
	],
};

export const generateMetadata = async ({
	params,
}: {
	params: { locale: Locale };
}): Promise<Metadata> => {
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
};

export const generateStaticParams = () => {
	return locales.map((locale) => ({ locale }));
};

type RootLayoutProps = {
	children: React.ReactNode;
	params: { locale: string };
};

const RootLayout = ({ children, params: { locale } }: RootLayoutProps) => {
	if (!locales.includes(locale as any)) {
		notFound();
	}

	unstable_setRequestLocale(locale);

	return (
		<html
			className={cn(fontMono.variable, fontNoto.variable)}
			lang={locale}
			suppressHydrationWarning
		>
			<body className='min-h-screen overflow-x-hidden antialiased'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<LocaleProvider>
						<Header />
						<main className='layout mt-16 min-h-[calc(100vh_-_56px_-_196px)]'>
							{children}
						</main>
						<Footer />
						<ScrollToTop />
					</LocaleProvider>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
