import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { allPosts } from '@/content';
import { getLocalizedUrl } from '@/utils/url';
import FilterPosts from './filter-posts';

export const generateMetadata = async ({
	params,
}: {
	params: { locale: Locale };
}): Promise<Metadata> => {
	const t = await getTranslations();
	const url = getLocalizedUrl({
		locale: params.locale,
		pathname: 'blog',
	});

	return {
		title: t('common.blog'),
		description: t('blogPage.description'),
		alternates: {
			canonical: url,
		},
	};
};

const BlogPage = () => {
	const t = useTranslations();
	const locale = useLocale();
	const posts = allPosts
		.filter((post) => post.language === locale)
		.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

	return (
		<>
			<h1 className='text-2xl font-bold tracking-tight animate-fade-in'>
				{t('common.blog')}
			</h1>
			<p className='mt-1 text-muted-foreground animate-fade-in animation-delay-1'>
				{t.rich('blogPage.subTitle', {
					highlight: () => (
						<span className='font-medium text-foreground'>{posts.length}</span>
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
