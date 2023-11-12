import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allPages } from 'contentlayer/generated';
import { useLocale } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import GradientText from '@/components/gradient-text';
import MDXContent from '@/components/mdx-content';

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: Locale };
}): Promise<Metadata> {
	const t = await getTranslator(locale, 'aboutPage');

	return {
		title: 'About',
		description: t('description'),
	};
}

export default function AboutPage() {
	const currentLocale = useLocale() as Locale;
	const page = allPages.find(page => page.slug === 'about' && page.language === currentLocale);

	if (!page) {
		return notFound();
	}

	return (
		<>
			<GradientText
				className='mb-2 animate-in bg-gradient-to-br from-primary-500 to-accent-500 text-3xl font-bold'
				as='h1'
			>
				About
			</GradientText>
			<MDXContent animateDelayIndex={1} code={page.body.code} />
		</>
	);
};

