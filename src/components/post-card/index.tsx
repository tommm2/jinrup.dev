'use client';

import type { Post } from 'contentlayer/generated';
import { useLocale } from 'next-intl';

import Link from '@/components/link';
import ViewCounter from '@/components/view-counter';
import { useEnabledFirstInView } from '@/hooks';
import { defaultLocale } from '@/lib/navigation';
import { formatDate } from '@/utils/date';

type PostCardProps = {
	post: Post;
};

function PostCard({ post }: PostCardProps) {
	const locale = useLocale() as Locale;
	const { enabled, intersectionRef }  = useEnabledFirstInView();

	const {
		slug,
		title,
		publishedAt,
	} = post;

	const formatString = locale === defaultLocale ? 'LLLd日' : 'LLLL d';

	return (
		<div ref={intersectionRef}>
			<Link
				className='opacity-hover font-medium'
				href={`/blog/${slug}`}
			>
				{title}
			</Link>
			<div className='text-sm text-base-300/60'>
				<time dateTime={publishedAt}>
					{formatDate(publishedAt, formatString, locale)}
				</time>
				．
				{enabled && <ViewCounter slug={slug} />}
			</div>
		</div>
	);
}

export default PostCard;
