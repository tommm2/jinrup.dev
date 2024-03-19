import type { Post } from '@/.velite';
import { useLocale } from 'next-intl';
import { RiArrowRightSLine } from 'react-icons/ri';

import GradientText from '@/components/gradient-text';
import { formatDate } from '@/utils/date';
import Link from '@/components/link';
import { defaultLocale } from '@/lib/navigation';

type PostsProps = {
	title: string;
	posts: Post[];
	viewMoreText: string;
};

function Posts({ title, posts, viewMoreText }: PostsProps) {
	const locale = useLocale() as Locale;

	return (
		<section className='animate-in animation-delay-5'>
			<div className='flex justify-between'>
				<GradientText
					as='h2'
					className='text-xl font-bold tracking-tight'
				>
					{title}
				</GradientText>
				<Link
					isBlock
					showAnchorIcon
					anchorIcon={<RiArrowRightSLine />}
					href='/blog'
				>
					{viewMoreText}
				</Link>
			</div>
			<div className='mt-4 space-y-6'>
				{posts.map((post) => {
					const date = formatDate({
						date: post.publishedAt,
						formatString: locale === defaultLocale ? 'PPP' : undefined,
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
								href={post.permalink}
							>
								{post.title}
							</Link>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Posts;
