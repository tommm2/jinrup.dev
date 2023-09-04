'use client';

import { allPosts, allProjects } from 'contentlayer/generated';
import { RiArrowRightLine } from 'react-icons/ri';

import { sortPostsByDate } from '@/lib/utils';

import Heading from '@/components/Heading';
import Hero from '@/components/Hero';
import PostCard from '@/components/PostCard';
import CustomLink from '@/components/Mdx/CustomLink';
import ProjectCard from '@/components/ProjectCard';

const HomePage = () => {
	const posts = sortPostsByDate(allPosts).slice(0, 4);
	const projects = allProjects.slice(0, 4);

	return (
		<>
			<Hero />
			<section>
				<Heading
					className='mb-6 mt-8 flex items-center justify-between'
					hasUnderline
				>
					<span>作品</span>
					<CustomLink
						className='flex items-center gap-1 text-sm font-normal text-base-900 dark:text-base-200'
						href='/projects'
					>
						查看更多
						<RiArrowRightLine className='h-4 w-4' />
					</CustomLink>
				</Heading>
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
				<Heading
					className='mb-6 mt-8 flex items-center justify-between'
					hasUnderline
				>
					<span>近期文章</span>
					<CustomLink
						className='flex items-center gap-1 text-sm font-normal text-base-900 dark:text-base-200'
						href='/blog'
					>
						查看更多
						<RiArrowRightLine className='h-4 w-4' />
					</CustomLink>
				</Heading>
				<div className='space-y-4'>
					{posts.map((post) => (
						<PostCard
							key={post.slug}
							post={post}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default HomePage;
