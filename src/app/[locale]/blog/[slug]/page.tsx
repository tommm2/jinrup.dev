import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { RiArrowLeftLine } from 'react-icons/ri';
import { allPosts } from 'contentlayer/generated';

import Link from '@/components/link';
import ViewCounter from '@/components/view-counter';
import MDXContent from '@/components/mdx-content';
import Comment from '@/components/comment';
import { getItemBySlugAndLocale } from '@/lib/contentlayer';
import { formatDate } from '@/utils/date';

export async function generateStaticParams() {
	return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { locale: Locale; slug: string };
}): Promise<Metadata | undefined> {
	const post = getItemBySlugAndLocale(allPosts, params.slug, params.locale);

	if (!post) {
		return;
	}

	const {
		title,
		description,
		publishedAt,
		slug,
	} = post;

	return {
		title,
		description,
		openGraph: {
			type: 'article',
			title,
			description,
			publishedTime: publishedAt,
			url: `https://tomjin.vercel.app/blog/${slug}`,
		},
	};
}

type BlogPostLayoutProps = {
	params: {
		slug: string;
		locale: Locale;
	};
}

const BlogPostLayout = ({ params }: BlogPostLayoutProps) => {
	const post = getItemBySlugAndLocale(allPosts, params.slug, params.locale);

	if (!post) {
		notFound();
	}

	const {
		slug,
		title,
		language,
		publishedAt,
	} = post;

	return (
		<>
			{language !== params.locale ? '文章不支援目前語系' : null}
			<Link
				className='-ml-2 mb-8 inline-flex items-center gap-1 rounded-xl p-1.5 text-base-300/80 transition-colors duration-300 hover:bg-base-800/60 hover:text-base-300'
				href='/blog'
			>
				<RiArrowLeftLine />
				<span>Back to blog</span>
			</Link>
			<h1 className='text-3xl font-bold'>{title}</h1>
			<div className='mt-3 text-base-300/60'>
				<time dateTime={formatDate(publishedAt)}>
					{formatDate(publishedAt)}
				</time>
				<span className='p-1'>．</span>
				<ViewCounter
					slug={slug}
					isViewTracking
				/>
			</div>
			<MDXContent code={post.body.code} />
			<Comment locale={params.locale} />
		</>
	);
};

export default BlogPostLayout;
