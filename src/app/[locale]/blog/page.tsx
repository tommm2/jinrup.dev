import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

import FilterPosts from '@/components/filter-posts';
import GradientText from '@/components/gradient-text';
import { getUrlWithLocale } from '@/lib/navigation';

export async function generateMetadata({
	params,
}: { params: { locale: Locale }}): Promise<Metadata> {
	const t = await getTranslations('blogPage');
	const url = getUrlWithLocale(params.locale, 'blog');

	return {
		title: 'Blog',
		description: t('description'),
		alternates: {
			canonical: url,
		},
	};
}

const BlogPage = () => {
	const t = useTranslations();
	const locale = useLocale();
	const posts = allPosts
		.filter((post) => post.language === locale)
		.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

	return (
		<>
			<GradientText
				className='animate-in text-3xl font-bold'
				as='h1'
			>
				Blog
			</GradientText>
			<p
				className='mt-1 animate-in text-base-300/80'
				style={{ '--index': 1 } as React.CSSProperties}
			>
				{t.rich('blogPage.titleSection', {
					highlight: () => (
						<span className='font-medium text-primary-500'>{posts.length}</span>
					),
				})}
			</p>
			<FilterPosts
				posts={posts}
				placeholder={t('common.placeholder')}
				remindText={t('common.noResults')}
			/>
		</>
	);
};

export default BlogPage;
