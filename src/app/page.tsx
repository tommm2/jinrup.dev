import { allProjects, allPosts } from 'contentlayer/generated';

import { sortPostsByDate } from '@/lib/utils';
import ProjectCard from '@/components/ProjectCard';
import PostCard from '@/components/PostCard';
import Hero from '@/components/Hero';
import TitleRow from '@/components/TitleRow';

const HomePage = () => {
	const posts = sortPostsByDate(allPosts);
	const projects = allProjects;

	return (
		<div className='space-y-10'>
			<Hero />
			<div>
				<TitleRow
					isLinkVisible
					titleText='Featured Projects'
					href='/projects'
				/>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					{projects.map((project) => (
						<ProjectCard
							key={project.slug}
							project={project}
						/>
					))}
				</div>
			</div>
			<div>
				<TitleRow
					titleText='Latest Posts'
					isLinkVisible
					href='/blog'
				/>
				<div className='space-y-4'>
					{posts.map((post) => (
						<PostCard
							key={post.slug}
							post={post}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
