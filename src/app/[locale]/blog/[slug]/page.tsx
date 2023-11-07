import Image from 'next/image';
import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { allPosts } from 'contentlayer/generated';
import { RiArrowLeftLine, RiCalendar2Fill } from 'react-icons/ri';

import Link from '@/components/link';
import PageWrapper from '@/components/page-wrapper';
import ViewCounter from '@/components/view-counter';
import MDXContent from '@/components/mdx-content';
import { formatDate } from '@/utils/date';

export async function generateStaticParams() {
	return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { locale: Locale, slug: string }
}): Promise<Metadata | undefined> {
	const post = allPosts.find((post) => post.slug === params.slug && post.language === params.slug);

	if (!post) {
		return;
	}

	const {
		title,
		publishedAt: publishedTime,
		description,
		slug,
	} = post;

	return {
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
		slug: string
	}
}

const BlogLayout = ({ params }: BlogLayoutProps) => {
	const locale = useLocale();
	const post = allPosts.find((post) => post.slug === params.slug && post.language === locale);

	if (!post) {
		return;
	}

	const { imageMeta, imageSrc, title } = post;

	return (
		<PageWrapper>
			<Link
				className='-ml-1 mb-4 inline-flex items-center gap-1 p-1 text-sm transition-colors duration-300 hover:text-base-100'
				isBlock
				href='/blog'
			>
				<RiArrowLeftLine />
				<span>Back to blog</span>
			</Link>
			<h1 className='text-3xl font-bold'>{post.title}</h1>
			<div className='mt-2 flex items-center gap-2'>
				<time
					className='flex items-center gap-1 rounded-lg border border-base-700 bg-base-800 px-1.5 py-0.5 text-sm'
					dateTime={post.publishedAt}
				>
					<RiCalendar2Fill />
					{formatDate(post.publishedAt)}
				</time>
				<ViewCounter slug={post.slug} isViewTracking />
			</div>
			<hr className='mb-8 mt-4 border-base-700' />
			<Image
				className='aspect-[2_/_1] h-auto w-full rounded object-cover object-center'
				width={imageMeta.size.width || 700}
				height={imageMeta.size.width || 500}
				src={imageSrc}
				alt={title}
				placeholder='blur'
				blurDataURL={imageMeta.blur64}
			/>
			<MDXContent code={post.body.code} />
		</PageWrapper>
	);
};

export default BlogLayout;
