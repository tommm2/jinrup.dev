'use client';

import Image from 'next/image';
import type { Post } from 'contentlayer/generated';

import Link from '@/components/link';
import ViewCounter from '@/components/view-counter';
import { useEnabledFirstInView } from '@/hooks';
import { formatDate } from '@/utils/date';

type PostCardProps = {
	post: Post;
};

function PostCard({ post }: PostCardProps) {
	const { enabled, intersectionRef } = useEnabledFirstInView();

	const {
		slug,
		title,
		publishedAt,
		image,
		description,
	} = post;

	return (
		<div ref={intersectionRef}>
			<Link
				className='-mx-4 flex flex-col gap-2 rounded-md p-4 font-medium transition-colors duration-300 hover:bg-base-800/40 sm:flex-row sm:gap-4'
				href={`/blog/${slug}`}
			>
				<Image
					className='hidden min-h-[6.25rem] w-full rounded-md object-cover object-center sm:block sm:max-w-[10rem]'
					width={800}
					height={600}
					src={image}
					alt={title}
					priority
				/>
				<div className='space-y-1'>
					<p className='text-lg font-bold'>{title}</p>
					<p className='line-clamp-1 text-sm text-base-300/80 sm:line-clamp-2'>{description}</p>
					<div className='flex text-sm text-base-300/60'>
						<time dateTime={formatDate(publishedAt)}>
							{formatDate(publishedAt)}
						</time>
						<span>．</span>
						{enabled ? <ViewCounter slug={slug} /> : null}
					</div>
				</div>
			</Link>
		</div>
	);
}

export default PostCard;
