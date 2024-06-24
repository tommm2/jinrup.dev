'use client';

import { useFormatter } from 'next-intl';
import { useRef } from 'react';

import Link from '@/components/ui/link';
import ViewCounter from '@/components/view-counter';
import useIntersection from '@/hooks/use-intersection';

type PostCardProps = {
	slug: string;
	title: string;
	publishedAt: string;
	permalink: string;
};

const PostCard = ({ slug, title, publishedAt, permalink }: PostCardProps) => {
	const intersectionRef = useRef(null);
	const intersection = useIntersection(intersectionRef, {});
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
				<time dateTime={publishedAt}>{date}</time>．
				{intersection?.isIntersecting && <ViewCounter slug={slug} />}
			</div>
		</div>
	);
};

export default PostCard;
