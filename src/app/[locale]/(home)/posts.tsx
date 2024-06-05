import { useLocale, useTranslations } from 'next-intl';
import { RiArrowRightSLine } from 'react-icons/ri';

import GradientText from '@/components/ui/gradient-text';
import Link from '@/components/ui/link';
import { allPosts } from '@/content';
import { defaultLocale } from '@/lib/navigation';
import { formatDate } from '@/utils/date';

const Posts = () => {
	const t = useTranslations('common');
	const locale = useLocale() as Locale;
	const posts = allPosts
		.filter((post) => post.language === locale)
		.splice(0, 2);

	return (
		<section className='animate-fade-in animation-delay-5'>
			<div className='flex justify-between'>
				<GradientText
					as='h2'
					className='text-xl font-bold tracking-tight'
				>
					{t('latestPosts')}
				</GradientText>
				<Link
					variant='block'
					href='/projects'
				>
					{t('viewMore')}
					<RiArrowRightSLine />
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
								className='text-foreground/60'
								dateTime={post.publishedAt}
							>
								{date}
							</time>
							<Link
								className='font-medium'
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
};

export default Posts;
