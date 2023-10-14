import { useLocale, useTranslations } from 'next-intl';
import { allPosts, allProjects } from 'contentlayer/generated';
import { RiArrowRightLine } from 'react-icons/ri';

import Hero from '@/components/hero';
import Link from '@/components/link';
import PostCard from '@/components/post-card';
import ProjectCard from '@/components/project-card';
import { sortPostsByDate } from '@/lib/utils';
import AnimationWrapper from '@/components/page-wrapper';

const HomePage = () => {
	const locale = useLocale();
	const t = useTranslations('common');

	const posts = sortPostsByDate(allPosts)
		.filter(post => post.language === locale)
		.slice(0, 4);
	const projects = allProjects.slice(0, 4);

	return (
		<AnimationWrapper>
			<Hero />
			<section>
				<h2 className='flex items-center justify-between uppercase'>
					{t('projects')}
				</h2>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					{projects.map((project) => (
						<ProjectCard
							key={project.slug}
							project={project}
						/>
					))}
				</div>
			</section>
			<section>
				<h2 className='mb-6 mt-8 flex items-center justify-between uppercase'>
					<span>{t('latestPosts')}</span>
					<Link
						className='flex items-center gap-1 text-sm font-normal text-base-900 dark:text-base-200'
						href='/blog'
					>
						{t('seeMore')}
						<RiArrowRightLine className='h-4 w-4' />
					</Link>
				</h2>
				<div className='space-y-4'>
					{posts.map((post) => (
						<PostCard
							key={post.slug}
							post={post}
						/>
					))}
				</div>
			</section>
		</AnimationWrapper>
	);
};

export default HomePage;
