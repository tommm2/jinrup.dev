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
		<>
			<Heading as='h1'>專案</Heading>
			<p className='my-4'>
				展示一些專案，如果想看更多可以到我的
				<CustomLink
					className='mx-1'
					href='https://github.com/tommm2'
				>
					Github
				</CustomLink>
				瀏覽。
			</p>
			<Heading
				className='mb-6'
				hasUnderline
			>
				所有專案
			</Heading>
			<div className='grid grid-cols-1 gap-4 pb-1 sm:grid-cols-2'>
				{allProjects.map((project) => (
					<ProjectCard
						key={project.slug}
						project={project}
					/>
				))}
			</div>
		</>
	);
};

export default ProjectsPage;
