import Link from 'next/link';
import { Post } from 'contentlayer/generated';

import { formatDate } from '@/lib/utils';

import ViewCounter from '@/components/ViewCounter';

interface PostCardProps {
	post: Post
}

const PostCard = ({ post }: PostCardProps) => {
	const {
		slug,
		url,
		title,
		publishedAt,
		summary,
	} = post;

	return (
		<article>
			<p className='text-title inline-block text-lg leading-none'>
				<Link href={url}>{title}</Link>
			</p>
			<summary className='list-none text-base-950/70 dark:text-base-200/80'>{summary}</summary>
			<div className='text-sm text-base-950/60 dark:text-base-200/60'>
				<time dateTime={formatDate(publishedAt)}>{formatDate(publishedAt)}</time>
				<span className='mx-1'>•</span>
				<ViewCounter slug={slug} />
			</div>
		</article>
	);
};

export default PostCard;
