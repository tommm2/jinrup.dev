import type { Post } from 'contentlayer/generated';
import { useLocale } from 'next-intl';
import { RiArrowRightSLine } from 'react-icons/ri';

import GradientText from '@/components/gradient-text';
import { formatDate } from '@/utils/date';
import Link from '@/components/link';

type PostSectionProps = {
	title: string;
	posts: Post[];
};

function PostSection({ title, posts }: PostSectionProps) {
	const locale = useLocale() as Locale;

	return (
		<section>
			<GradientText
				as='h2'
				className='text-xl font-bold tracking-tight'
			>
				{title}
			</GradientText>
			<div className='mt-4 space-y-6'>
				{posts.map((post) => {
					const date = formatDate({
						date: post.publishedAt,
						formatString: 'PPP',
						locale,
					});

					return (
						<div
							key={post.slug}
							className='flex flex-col-reverse sm:flex-row sm:gap-8'
						>
							<time
								className='text-base-300/60'
								dateTime={post.publishedAt}
							>
								{date}
							</time>
							<Link
								className='opacity-hover font-medium'
								href={`/blog/${post.slug}`}
							>
								{post.title}
							</Link>
						</div>
					);
				})}
			</div>
			<Link
				className='mt-8'
				isBlock
				showAnchorIcon
				anchorIcon={<RiArrowRightSLine />}
				href='/blog'
			>
				view more
			</Link>
		</section>
	);
}

export default PostSection;
