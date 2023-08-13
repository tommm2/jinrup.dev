import { Metadata } from 'next';
import { allProjects } from 'contentlayer/generated';

import Heading from '@/components/Heading';
import ProjectCard from '@/components/ProjectCard';
import CustomLink from '@/components/Mdx/CustomLink';

export const metadata: Metadata = {
	title: '作品集',
	description: '歡迎來到我的專案頁面，這裡展示了我平時做的一些有趣的專案。',
};

const ProjectsPage = () => {
	return (
		<section>
			<h1>🗂️ 作品集</h1>
			<p className='my-4'>
				展示一些小專案，如果想看更多可以到我的
				<CustomLink
					className='mx-1'
					href='https://github.com/tommm2'
				>
					Github
				</CustomLink>
				瀏覽。
			</p>
			<Heading text='所有作品' />
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				{allProjects.map(project => <ProjectCard key={project.slug} project={project} />)}
			</div>
		</section>
	);
};

export default ProjectsPage;