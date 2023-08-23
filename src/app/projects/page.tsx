import { Metadata } from 'next';
import { allProjects } from 'contentlayer/generated';

import ProjectCard from '@/components/ProjectCard';
import CustomLink from '@/components/Mdx/CustomLink';
import Heading from '@/components/Heading';

export const metadata: Metadata = {
	title: '專案',
	description: '歡迎來到我的專案頁面，這裡展示了我平時做的一些有趣的專案。',
};

const ProjectsPage = () => {
	return (
		<section>
			<Heading
				as='h1'
				text='專案'
			/>
			<p className='my-4'>
				展示一些專案，如果想看更多可以到我的
				<CustomLink href='https://github.com/tommm2'>
					Github
				</CustomLink>
				瀏覽。
			</p>
			<Heading
				text='所有專案'
				hasUnderline
			/>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				{allProjects.map(project => <ProjectCard key={project.slug} project={project} />)}
			</div>
		</section>
	);
};

export default ProjectsPage;