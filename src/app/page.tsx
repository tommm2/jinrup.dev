import { allProjects, allPosts } from 'contentlayer/generated';

import { sortPostsByDate } from '@/lib/utils';
import Heading from '@/components/Heading';
import Hero from '@/components/Hero';
import PostCard from '@/components/PostCard';
import ProjectCard from '@/components/ProjectCard';

const HomePage = () => {
	const posts = sortPostsByDate(allPosts);
	const projects = allProjects;

	return (
		<>
			<Hero />
			<section>
				<Heading text='作品' />
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
				</div>
			</section>
			<section>
				<Heading text='最新文章' />
				<div className='space-y-4'>
					{posts.map((post) => <PostCard key={post.slug} post={post} />)}
				</div>
			</section>
		</>
	);
};

export default HomePage;
