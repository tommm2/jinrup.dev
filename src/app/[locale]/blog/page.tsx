import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

import FilterPosts from '@/components/filter-posts';
import GradientText from '@/components/gradient-text';

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('blogPage');

	return {
		title: 'Blog',
		description: t('description'),
		alternates: {
			canonical: 'https://tomjin.vercel.app/blog/',
		},
	};
}

const BlogPage = () => {
	const t = useTranslations();
	const locale = useLocale();
	const posts = allPosts
		.filter((post) => post.language === locale)
		.sort((a, b) =>
			compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
		);

	return (
		<>
			<GradientText
				className='animate-in from-primary-500 to-accent-500 text-3xl font-bold'
				as='h1'
			>
				Blog
			</GradientText>
			<p
				className='mt-5 animate-in'
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
