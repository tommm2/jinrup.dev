import Link from 'next/link';
import { useLocale } from 'next-intl';
import { allPosts } from 'contentlayer/generated';
import { RiArrowLeftLine } from 'react-icons/ri';

import Mdx from '@/components/Mdx';
import ViewCounter from '@/components/ViewCounter';
import Comment from '@/components/Comment';
import Heading from '@/components/Heading';

import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
	return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const post = allPosts.find((post) => post.slug === params.slug);

	if (!post) {
		return;
	}

	const {
		title,
		publishedAt: publishedTime,
		summary: description,
		slug,
	} = post;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://tomjin.vercel.app/blog/${slug}`,
		},
	};
}

type BlogLayoutProps = {
	params: {
		slug: string
	}
}

const BlogLayout = ({ params }: BlogLayoutProps) => {
	const locale = useLocale();
	const post = allPosts.find((post) => post.slug === params.slug && post.language === locale);

	if (!post) {
		return;
	}

	return (
		<>
			<Link
				className='mb-4 flex items-center gap-2'
				href='/blog'
			>
				<RiArrowLeftLine />
				<span>返回部落格</span>
			</Link>
			<Heading as='h1'>{post.title}</Heading>
			<div className='text-muted mb-8 flex items-center justify-between'>
				<time dateTime={post.publishedAt}>
					{formatDate(post.publishedAt)}
				</time>
				<ViewCounter
					slug={post.slug}
					isViewTracking
				/>
			</div>
			<article className='prose'>
				<Mdx code={post.body.code} />
				{/* <Comment /> */}
			</article>
		</>
	);
};

export default BlogLayout;
