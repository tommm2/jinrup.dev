import { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import BackToTop from '@/components/back-to-top';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { getUrlWithLocale, locales } from '@/lib/navigation';
import { cn } from '@/utils/cn';
import { fontNoto, fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';

export const viewport: Viewport = {
	themeColor: {
		color: '#0f0f0f',
	},
};

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: Locale };
}): Promise<Metadata> {
	const t = await getTranslations('homePage');
	const url = getUrlWithLocale(locale, '');

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
			url,
			siteName: siteConfig.name,
			images: siteConfig.ogImages,
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
			className={cn(
				'bg-base-950 font-sans text-base-200',
				fontSans.variable,
				fontNoto.variable,
			)}
			lang={locale}
		>
			<body className='min-h-screen overflow-x-hidden antialiased'>
				<Navbar />
				<main className='layout relative mt-12 min-h-[calc(100vh_-_56px_-_196px)]'>
					{children}
				</main>
				<Footer />
				<BackToTop />
			</body>
		</html>
	);
}

export default LocaleLayout;
