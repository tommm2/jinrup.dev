import { allPosts } from 'contentlayer/generated';
import { RiArrowLeftLine } from 'react-icons/ri';

import { formatDate } from '@/lib/utils';

import Mdx from '@/components/Mdx';
import ViewCounter from '@/components/ViewCounter';
import Comment from '@/components/Comment';
import Heading from '@/components/Heading';
import Link from 'next/link';

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
			url: `https://tomjin.dev/blog/${slug}`,
			// images: [
			// 	{
			// 		url: ogImage,
			// 	},
			// ],
		},
	};
}

interface BlogLayoutProps {
	params: {
		slug: string
	}
}

const BlogLayout = ({ params }: BlogLayoutProps) => {
	const post = allPosts.find((post) => post.slug === params.slug);

	if (!post) {
		return;
	}

	return (
		<article>
			<Link
				href='/blog'
				className='mb-4 flex items-center gap-2'
			>
				<RiArrowLeftLine />
				<span>返回部落格</span>
			</Link>
			<Heading
				as='h1'
				text={post.title}
				hasUnderline={false}
			/>
			<div className='mb-8 flex items-center justify-between text-base-950/60 dark:text-base-200/60'>
				<time dateTime={post.publishedAt}>
					{formatDate(post.publishedAt)}
				</time>
				<ViewCounter
					slug={post.slug}
					isViewTracking
				/>
			</div>
			<div className='prose'>
				<Mdx code={post.body.code} />
				<Comment />
			</div>
		</article>
	);
};

export default BlogLayout;
