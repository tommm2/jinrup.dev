import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

import ClientIntlProvider from '@/components/client-intl-provider';
import FilterPosts from '@/components/filter-posts';
import { getUrlWithLocale } from '@/lib/navigation';

export async function generateMetadata({
	params,
}: { params: { locale: Locale }}): Promise<Metadata> {
	const t = await getTranslations();
	const url = getUrlWithLocale(params.locale, 'blog');

	return {
		title: t('common.blog'),
		description: t('blogPage.description'),
		alternates: {
			canonical: url,
		},
	};
}

function BlogPage() {
	const t = useTranslations();
	const locale = useLocale();
	const posts = allPosts
		.filter((post) => post.language === locale)
		.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

	return (
		<>
			<h1 className='animate-in text-2xl font-bold tracking-tight'>
				{t('common.blog')}
			</h1>
			<p className='mt-1 animate-in text-base-300/80 animation-delay-1'>
				{t.rich('blogPage.subTitle', {
					highlight: () => (
						<span className='font-medium text-primary-500'>{posts.length}</span>
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
}

export default BlogPage;
