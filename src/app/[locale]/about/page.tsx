import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { allPages } from 'contentlayer/generated';

import GradientText from '@/components/gradient-text';
import PageWrapper from '@/components/page-wrapper';
import MDXContent from '@/components/mdx-content';

const AboutPage = () => {
	const currentLocale = useLocale() as Locale;
	const page = allPages.find(page => page.slug === 'about' && page.language === currentLocale);

	if (!page) {
		return notFound();
	}

	return (
		<PageWrapper>
			<GradientText
				as='h1'
				className='mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-3xl font-bold'
			>
				About
			</GradientText>
			<MDXContent code={page.body.code} />
		</PageWrapper>
	);
};

export default AboutPage;
