import Image from 'next/image';
import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { allPosts } from 'contentlayer/generated';
import { RiArrowLeftLine } from 'react-icons/ri';

import Link from '@/components/link';
import ViewCounter from '@/components/view-counter';
import MDXContent from '@/components/mdx-content';
import Comment from '@/components/comment';
import { formatDate } from '@/utils/date';

export async function generateStaticParams() {
	return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { locale: Locale; slug: string };
}): Promise<Metadata | undefined> {
	const post = allPosts.find(
		(post) => post.slug === params.slug && post.language === params.slug,
	);

	if (!post) {
		return;
	}

	const { title, publishedAt: publishedTime, description, slug } = post;

	return {
		title,
		description,
		openGraph: {
			type: 'article',
			title,
			description,
			publishedTime,
			url: `https://tomjin.vercel.app/blog/${slug}`,
		},
	};
}

interface BlogLayoutProps {
	params: {
		slug: string;
	};
}

const BlogLayout = ({ params }: BlogLayoutProps) => {
	const locale = useLocale() as Locale;
	const post = allPosts.find((post) => post.slug === params.slug && post.language === locale);

	if (!post) {
		return;
	}

	const { image, title, publishedAt, slug } = post;

	return (
		<>
			<Link
				className='-ml-2 mb-8 inline-flex items-center gap-1 rounded-xl p-2 text-base-300/80 transition-colors duration-300 hover:bg-base-800/60 hover:text-base-300'
				href='/blog'
			>
				<RiArrowLeftLine />
				<span>Back to blog</span>
			</Link>
			<div className='mb-12'>
				<div className='text-base-300/60'>
					<time dateTime={formatDate(publishedAt)}>
						{formatDate(publishedAt)}
					</time>
					<span>．</span>
					<ViewCounter
						slug={slug}
						isViewTracking
					/>
				</div>
				<h1 className='my-3 text-3xl font-bold'>{post.title}</h1>
				<Image
					className='max-h-[22.5rem] w-full rounded-xl object-cover object-center'
					width={800}
					height={600}
					src={image}
					alt={title}
					priority
				/>
			</div>
			<MDXContent code={post.body.code} />
			<Comment locale={locale} />
		</>
	);
};

export default BlogLayout;
