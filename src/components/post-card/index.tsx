'use client';

import type { Post } from '@/.velite';
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
		permalink,
	} = post;

	const formatString = locale === defaultLocale ? 'LLLd日' : 'LLLL d';
	const date = formatDate({
		date: publishedAt,
		formatString,
		locale,
	});

	return (
		<div ref={intersectionRef}>
			<Link
				className='opacity-hover font-medium'
				href={permalink}
			>
				{title}
			</Link>
			<div className='text-sm text-base-300/60'>
				<time dateTime={publishedAt}>
					{date}
				</time>
				．
				{enabled && <ViewCounter slug={slug} />}
			</div>
		</div>
	);
}

export default PostCard;
