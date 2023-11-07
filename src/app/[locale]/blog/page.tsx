import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

import PageWrapper from '@/components/page-wrapper';
import FilterPosts from '@/components/filter-posts';
import GradientText from '@/components/gradient-text';

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: Locale }
}): Promise<Metadata> {
	const t = await getTranslator(locale, 'blogPage');

	return {
		title: 'Blog',
		description: t('description'),
	};
}

const BlogPage = () => {
	const t = useTranslations();
	const locale = useLocale();
	const posts = allPosts
		.filter(post => post.language === locale)
		.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

	console.log(posts);

	return (
		<PageWrapper>
			<GradientText
				className='from-primary-500 to-secondary-500 text-3xl font-bold'
				as='h1'
			>
				Blog
			</GradientText>
			<p className='mb-4 text-base-400'>
				{t('blogPage.titleSection', { count: posts.length })}
			</p>
			<FilterPosts
				posts={posts}
				placeholder={t('common.placeholder')}
				remindText={t('common.noResults')}
			/>
		</PageWrapper>
	);
};

export default BlogPage;
