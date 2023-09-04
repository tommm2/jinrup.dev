import { Post } from 'contentlayer/generated';

import { formatDate } from '@/lib/utils';

import ViewCounter from '../ViewCounter';
import Heading from '../Heading';
import CustomLink from '../Mdx/CustomLink';

interface PostCardProps {
	post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
	const { slug, url, title, publishedAt, summary } = post;

	return (
		<article className='space-y-1'>
			<Heading as='h3'>
				<CustomLink
					className='text-base-900 dark:text-base-200'
					href={url}
				>
					{title}
				</CustomLink>
			</Heading>
			<div className='text-muted text-sm'>
				<time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
				<span className='mx-1'>•</span>
				<ViewCounter slug={slug} />
			</div>
			<summary className='text-muted list-none'>{summary}</summary>
		</article>
	);
};

export default PostCard;
