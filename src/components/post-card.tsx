'use client';

import { useFormatter } from 'next-intl';
import { useRef } from 'react';

import Link from '@/components/ui/link';

type PostCardProps = {
	title: string;
	publishedAt: string;
	permalink: string;
};

const PostCard = ({ title, publishedAt, permalink }: PostCardProps) => {
	const intersectionRef = useRef(null);
	const format = useFormatter();

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
				<time dateTime={publishedAt}>{date}</time>
			</div>
		</div>
	);
};

export default PostCard;
