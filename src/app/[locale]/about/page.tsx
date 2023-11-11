import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { allPages } from 'contentlayer/generated';

import GradientText from '@/components/gradient-text';
import PageWrapper from '@/components/page-wrapper';
import MDXContent from '@/components/mdx-content';

export default function AboutPage() {
	const currentLocale = useLocale() as Locale;
	const page = allPages.find(page => page.slug === 'about' && page.language === currentLocale);

	if (!page) {
		return notFound();
	}

	return (
		<PageWrapper>
			<GradientText
				className='mb-2 animate-in bg-gradient-to-br from-primary-500 to-accent-500 text-3xl font-bold'
				as='h1'
			>
				About
			</GradientText>
			<MDXContent animateDelayIndex={1} code={page.body.code} />
		</PageWrapper>
	);
};

