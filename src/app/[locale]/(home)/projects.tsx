import type { Project } from '@/.velite';
import { RiArrowRightSLine } from 'react-icons/ri';

import GradientText from '@/components/gradient-text';
import ProjectCard from '@/components/project-card';
import Link from '@/components/link';

type ProjectsProps = {
	title: string;
	projects: Project[];
	viewMoreText: string;
};

function Projects({
	title,
	projects,
	viewMoreText,
}: ProjectsProps) {
	return (
		<section className='animate-in animation-delay-4'>
			<div className='flex items-center justify-between'>
				<GradientText
					as='h2'
					className='text-xl font-bold tracking-tight'
				>
					{title}
				</GradientText>
				<Link
					isBlock
					showAnchorIcon
					anchorIcon={<RiArrowRightSLine />}
					href='/projects'
				>
					{viewMoreText}
				</Link>
			</div>
			<div className='mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2'>
				{projects.map((project) => (
					<ProjectCard
						key={project.slug}
						project={project}
					/>
				))}
			</div>
		</section>
	);
}

export default Projects;
