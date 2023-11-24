import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { RiArrowLeftLine } from 'react-icons/ri';
import { allPosts } from 'contentlayer/generated';

import Comment from '@/components/comment';
import Callout from '@/components/mdx-components/callout';
import Link from '@/components/link';
import MDXContent from '@/components/mdx-content';
import ViewCounter from '@/components/view-counter';
import GradientText from '@/components/gradient-text';
import { getArticleBySlugAndLocale } from '@/lib/contentlayer';
import { getUrlWithLocale } from '@/lib/navigation';
import { formatDate } from '@/utils/date';

export async function generateStaticParams() {
	return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { locale: Locale; slug: string };
}): Promise<Metadata | undefined> {
	const post = getArticleBySlugAndLocale(allPosts, params.slug, params.locale);

	if (!post) {
		return;
	}

	const { title, description, publishedAt, slug } = post;

	const url = getUrlWithLocale(params.locale, 'blog', slug);

	return {
		title,
		description,
		openGraph: {
			type: 'article',
			title,
			description,
			publishedTime: publishedAt,
			url,
		},
		alternates: {
			canonical: url,
		},
	};
}

type BlogPostLayoutProps = {
	params: {
		slug: string;
		locale: Locale;
	};
};

function BlogPostLayout ({ params }: BlogPostLayoutProps) {
	const t = useTranslations('common');
	const post = getArticleBySlugAndLocale(allPosts, params.slug, params.locale);

	if (!post) {
		notFound();
	}

	const { title, language, publishedAt, slug } = post;

	return (
		<>
			<Link
				className='-ml-2 inline-flex animate-in items-center gap-1 rounded-md p-1.5 text-base-300/80 transition-colors duration-300 hover:bg-base-800/60 hover:text-base-300'
				href='/blog'
			>
				<RiArrowLeftLine />
				<span>Back to blog</span>
			</Link>
			<div className='mt-8 animate-in'>
				<GradientText
					className='text-3xl font-bold'
					as='h1'
				>
					{title}
				</GradientText>
				<div className='mt-3 text-base-300/60'>
					<time dateTime={formatDate(publishedAt)}>
						{formatDate(publishedAt)}
					</time>
					<span className='p-1'>．</span>
					<ViewCounter
						slug={slug}
						shouldIncrement
					/>
				</div>
				{language !== params.locale && (
					<Callout type='warning'>{t('noSupport')}</Callout>
				)}
			</div>
			<div className='prose mt-5 animate-in'>
				<MDXContent code={post.body.code} />
			</div>
			<Comment locale={params.locale} />
		</>
	);
}

export default BlogPostLayout;
