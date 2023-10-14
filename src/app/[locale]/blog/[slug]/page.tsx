import Link from 'next/link';
import { useLocale } from 'next-intl';
import { allPosts } from 'contentlayer/generated';
import { RiArrowLeftLine } from 'react-icons/ri';

import Mdx from '@/components/mdx-content';
import ViewCounter from '@/components/view-counter';
import Comment from '@/components/comment';
import PageWrapper from '@/components/page-wrapper';
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
		<PageWrapper>
			<Link
				className='mb-4 flex items-center gap-2'
				href='/blog'
			>
				<RiArrowLeftLine />
				<span>返回部落格</span>
			</Link>
			<h1>{post.title}</h1>
			<div className='mb-8 flex items-center justify-between'>
				<time dateTime={post.publishedAt}>
					{formatDate(post.publishedAt)}
				</time>
				<ViewCounter
					slug={post.slug}
					isViewTracking
				/>
			</div>
			<Mdx code={post.body.code} />
			{/* <Comment /> */}
		</PageWrapper>
	);
};

export default BlogLayout;
