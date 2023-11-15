import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';

import BackToTop from '@/components/back-to-top';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { getUrlWithLocale, locales } from '@/lib/navigation';
import { cn } from '@/utils/cn';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';

export async function generateMetadata({
	params: { locale },
}: { params: { locale: Locale }}): Promise<Metadata> {
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
			images: [],
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

const LocaleLayout = ({
	children,
	params: { locale },
}: LocaleLayoutProps) => {
	const isValidLocale = locales.some((current) => current === locale);

	if (!isValidLocale) notFound();

	unstable_setRequestLocale(locale);

	return (
		<html
			className={cn(
				'bg-base-900 font-sans text-base-200',
				fontSans.variable,
			)}
			lang={locale}
		>
			<body className='min-h-screen overflow-x-hidden bg-base-900 font-sans text-base-200 antialiased'>
				<Navbar />
				<main className='mx-auto mt-12 min-h-[calc(100vh_-_56px_-_196px)] max-w-[43.75rem] px-8'>
					{children}
				</main>
				<Footer />
				<BackToTop />
			</body>
		</html>
	);
};

export default LocaleLayout;
