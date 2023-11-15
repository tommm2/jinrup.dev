import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { allPages } from 'contentlayer/generated';

import GradientText from '@/components/gradient-text';
import MDXContent from '@/components/mdx-content';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('aboutPage');

	return {
		title: 'About',
		description: t('description'),
		alternates: {
			canonical: 'https://tomjin.vercel.app/about/',
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
				className='mb-2 animate-in bg-gradient-to-br from-primary-500 to-accent-500 text-3xl font-bold'
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
