import { allPosts } from 'contentlayer/generated';

import { formatDate } from '@/lib/utils';

import Mdx from '@/components/Mdx';
import ViewCounter from '@/components/ViewCounter';

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

type Props = {
	params: {
		slug: string
	}
}

const BlogLayout = ({ params }: Props) => {
	const post = allPosts.find((post) => post.slug === params.slug);

	if (!post) {
		return;
	}

	return (
		<article className='prose'>
			<h1 className='text-center text-3xl'>{post.title}</h1>
			<div className='flex items-center justify-center gap-6'>
				<div className='flex items-center gap-2'>
					<time dateTime={post.publishedAt} className='mb-1'>
						{formatDate(post.publishedAt)}
					</time>
				</div>
				<ViewCounter
					slug={post.slug}
					isViewTracking
				/>
			</div>
			<Mdx code={post.body.code}  />
		</article>
	);
};

export default BlogLayout;
