import { Post } from 'contentlayer/generated';

import Link from '@/components/link';
import ViewCounter from '@/components/view-counter';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
	post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
	const { slug, url, title, publishedAt, summary } = post;

	return (
		<article className='space-y-1'>
			<h3>
				<Link className='text-base-900 dark:text-base-200' href={url}>
					{title}
				</Link>
			</h3>
			<div className='text-sm'>
				<time dateTime={publishedAt}>
					{formatDate(publishedAt)}
				</time>
				<span className='mx-1'>•</span>
				<ViewCounter slug={slug} />
			</div>
			<summary className='list-none'>
				{summary}
			</summary>
		</article>
	);
};

export default PostCard;
