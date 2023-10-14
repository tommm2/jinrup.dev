import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { allPages } from 'contentlayer/generated';

import MDXContent from '@/components/mdx-content';
import PageWrapper from '@/components/page-wrapper';

export const metadata: Metadata = {
	title: '關於',
	description: '關於我的簡介、工作經驗等等...',
};

const AboutPage = () => {
	const locale = useLocale();
	const page = allPages.find((page) => page.slug === 'about' && page.language === locale);

	if (!page) {
		return;
	}

	return (
		<PageWrapper>
			<h1>關於</h1>
			<MDXContent code={page.body.code} />
		</PageWrapper>
	);
};

export default AboutPage;
