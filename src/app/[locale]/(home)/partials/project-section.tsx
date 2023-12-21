import type { Project } from 'contentlayer/generated';
import { RiArrowRightSLine } from 'react-icons/ri';

import GradientText from '@/components/gradient-text';
import ProjectCard from '@/components/project-card';
import Link from '@/components/link';

type ProjectSectionProps = {
	title: string;
	projects: Project[];
};

function ProjectSection({ title, projects }: ProjectSectionProps) {
	return (
		<section>
			<GradientText
				as='h2'
				className='text-xl font-bold tracking-tight'
			>
				{title}
			</GradientText>
			<div className='mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2'>
				{projects.map((project) => (
					<ProjectCard
						key={project.slug}
						project={project}
					/>
				))}
			</div>
			<Link
				className='mt-8'
				isBlock
				showAnchorIcon
				anchorIcon={<RiArrowRightSLine />}
				href='/projects'
			>
				view more
			</Link>
		</section>
	);
}

export default ProjectSection;
