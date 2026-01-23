import { Metadata } from 'next';
import { useFormatter, useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import Comment from '@/components/comment';
import MDXContent from '@/components/mdx';
import Callout from '@/components/mdx/callout';
import Link from '@/components/ui/link';
import { allPosts } from '@/content';
import { getContentWithFallback } from '@/utils/content';
import { getLocalizedUrl } from '@/utils/url';

export const generateStaticParams = async () => {
	return allPosts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({
	params,
}: {
	params: { locale: Locale; slug: string };
}): Promise<Metadata | undefined> => {
	const post = getContentWithFallback({
		contentItems: allPosts,
		slug: params.slug,
		locale: params.locale,
	});

	if (!post) {
		return;
	}

	const { title, description, publishedAt, slug } = post;

	const url = getLocalizedUrl({
		locale: params.locale,
		pathname: 'blog',
		slug,
	});

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
};

type BlogPostLayoutProps = {
	params: {
		slug: string;
		locale: Locale;
	};
};

const BlogPostLayout = ({ params }: BlogPostLayoutProps) => {
	const t = useTranslations('common');
	const format = useFormatter();

	const post = getContentWithFallback({
		contentItems: allPosts,
		slug: params.slug,
		locale: params.locale,
	});

	if (!post) {
		notFound();
	}

	const { title, language, publishedAt, slug } = post;

	const date = format.dateTime(new Date(publishedAt), {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<>
			<Link
				variant='block'
				className='gap-1 animate-fade-in'
				href='/blog'
			>
				<ArrowLeft className='size-4' />
				<span>{t('backToBlog')}</span>
			</Link>
			<div className='mt-8 animate-fade-in animation-delay-1'>
				<h1 className='text-2xl font-bold'>
					{title}
				</h1>
				<div className='mt-3 text-sm text-muted-foreground'>
					<time dateTime={publishedAt}>{date}</time>
				</div>
				{language !== params.locale && (
					<Callout variant='warning'>{t('noSupport')}</Callout>
				)}
			</div>
			<article className='prose my-8 animate-fade-in animation-delay-2'>
				<MDXContent code={post.content} />
			</article>
			<Comment locale={params.locale} />
		</>
	);
};

export default BlogPostLayout;
