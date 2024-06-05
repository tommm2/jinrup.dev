'use client';

import { useLocale } from 'next-intl';

import Link from '@/components/ui/link';
import ViewCounter from '@/components/view-counter';
import type { Post } from '@/content';
import { useEnabledFirstInView } from '@/hooks';
import { defaultLocale } from '@/lib/navigation';
import { formatDate } from '@/utils/date';

type PostCardProps = {
	post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
	const locale = useLocale() as Locale;
	const { enabled, intersectionRef } = useEnabledFirstInView();

	const { slug, title, publishedAt, permalink } = post;

	const formatString = locale === defaultLocale ? 'LLLd日' : 'LLLL d';
	const date = formatDate({
		date: publishedAt,
		formatString,
		locale,
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
