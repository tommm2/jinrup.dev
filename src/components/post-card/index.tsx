import Image from 'next/image';
import { Post } from 'contentlayer/generated';

import Link from '@/components/link';
import { formatDate } from '@/utils/date';
import ViewCounter from '../view-counter';

interface PostCardProps {
	post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
	const { slug, title, publishedAt, image, description } = post;

	return (
		<li className='group relative'>
			<Link
				className='flex flex-col gap-2 p-2 font-medium sm:flex-row sm:gap-4'
				href={`/blog/${slug}`}
			>
				<Image
					className='w-full rounded-md object-cover object-center sm:max-w-[9rem]'
					width={800}
					height={600}
					src={image}
					alt={title}
					priority
				/>
				<div className='space-y-1'>
					<h2 className='text-xl font-bold'>
						{title}
					</h2>
					<p className='line-clamp-1 text-sm text-base-300/80'>{description}</p>
					<div className='text-sm text-base-300/60'>
						<time dateTime={formatDate(publishedAt)}>
							{formatDate(publishedAt)}
						</time>
						<span>．</span>
						<ViewCounter slug={slug} />
					</div>
				</div>

			</Link>
			<div className='absolute -inset-2 -z-10 rounded-md transition-colors duration-300 group-hover:bg-base-800/40'></div>
		</li>
	);
};

export default PostCard;
