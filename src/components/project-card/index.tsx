import Image from 'next/image';
import { Project } from 'contentlayer/generated';

import Link from '../link';

interface ProjectCardProps {
	project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const { slug, image, title, description } = project;

	return (
		<div className='group relative rounded-lg border border-base-700/60 bg-base-800/60 transition-all duration-300 sm:h-[10rem]'>
			<span className='absolute -left-px top-3/4 h-10 w-px bg-gradient-to-b from-transparent via-primary-400 to-transparent opacity-0 transition-all duration-500 group-hover:top-1/4 group-hover:opacity-100' />
			<Link
				className='group relative flex flex-col gap-3 rounded-2xl p-4'
				href={`/projects/${slug}`}
			>
				<Image
					className='rounded-full border border-base-800 p-2'
					width={50}
					height={50}
					priority
					src={image}
					alt={title}
				/>
				<div className='space-y-1'>
					<h3 className='font-bold'>
						{title}
					</h3>
					<p className='line-clamp-2 list-none text-sm text-base-400'>
						{description}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default ProjectCard;
