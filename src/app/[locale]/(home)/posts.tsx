import { useFormatter, useLocale, useTranslations } from 'next-intl';
import { RiArrowRightSLine } from 'react-icons/ri';

import GradientText from '@/components/ui/gradient-text';
import Link from '@/components/ui/link';
import { allPosts } from '@/content';

const Posts = () => {
	const t = useTranslations('common');
	const locale = useLocale() as Locale;
	const format = useFormatter();

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
					const { slug, publishedAt, title, permalink } = post;
					const date = format.dateTime(new Date(publishedAt), {
						month: 'long',
						day: 'numeric',
					});

					return (
						<div
							key={slug}
							className='flex flex-col-reverse sm:flex-row sm:gap-8'
						>
							<time
								className='text-foreground/60'
								dateTime={publishedAt}
							>
								{date}
							</time>
							<Link
								className='font-medium'
								href={permalink}
							>
								{title}
							</Link>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Posts;
