import { compareDesc } from 'date-fns';
import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { allPosts } from '@/.velite';
import ClientIntlProvider from '@/components/client-intl-provider';
import GradientText from '@/components/gradient-text';
import { getLocalizedUrl } from '@/utils/url';

import FilterPosts from './filter-posts';

export async function generateMetadata({
	params,
}: {
	params: { locale: Locale };
}): Promise<Metadata> {
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
				as='h1'
				className='animate-fade-in text-2xl font-bold tracking-tight'
			>
				{t('common.blog')}
			</GradientText>
			<p className='mt-1 animate-fade-in text-foreground/80 animation-delay-1'>
				{t.rich('blogPage.subTitle', {
					highlight: () => (
						<span className='font-medium text-primary'>{posts.length}</span>
					),
				})}
			</p>
			<ClientIntlProvider messageKey='common'>
				<FilterPosts
					posts={posts}
					placeholder={t('common.placeholder')}
					remindText={t('common.noResults')}
				/>
			</ClientIntlProvider>
		</>
	);
};

export default BlogPage;
