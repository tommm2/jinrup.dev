'use client';

import { useFormatter } from 'next-intl';

import type { Post } from '@/content';
import Link from '@/components/ui/link';
import ViewCounter from '@/components/view-counter';
import { useEnabledFirstInView } from '@/hooks';

type PostCardProps = {
	post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
	const format = useFormatter();

	const { enabled, intersectionRef } = useEnabledFirstInView();

	const { slug, title, publishedAt, permalink } = post;

	const date = format.dateTime(new Date(publishedAt), {
		month: 'long',
		day: 'numeric',
	});

	return (
		<div ref={intersectionRef}>
			<Link
				className='font-medium'
				href={permalink}
			>
				{title}
			</Link>
			<div className='text-sm text-foreground/60'>
				<time dateTime={publishedAt}>{date}</time>．
				{enabled && <ViewCounter slug={slug} />}
			</div>
		</div>
	);
};

export default PostCard;
