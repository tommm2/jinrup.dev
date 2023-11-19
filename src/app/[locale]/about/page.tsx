import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { allPages } from 'contentlayer/generated';

import GradientText from '@/components/gradient-text';
import MDXContent from '@/components/mdx-content';
import { getUrlWithLocale } from '@/lib/navigation';

export async function generateMetadata({
	params,
}: { params: { locale: Locale }}): Promise<Metadata> {
	const t = await getTranslations('aboutPage');
	const url = getUrlWithLocale(params.locale, 'about');

	return {
		title: 'About',
		description: t('description'),
		alternates: {
			canonical: url,
		},
	};
}

const AboutPage = () => {
	const locale = useLocale() as Locale;
	const page = allPages.find((page) => page.slug === 'about' && page.language === locale);

	if (!page) {
		notFound();
	}

	return (
		<>
			<GradientText
				className='animate-in text-3xl font-bold'
				as='h1'
			>
				About
			</GradientText>
			<div
				className='prose mt-5 animate-in'
				style={{ '--index': 1 } as React.CSSProperties}
			>
				<MDXContent code={page.body.code} />
			</div>
		</>
	);
};

export default AboutPage;
