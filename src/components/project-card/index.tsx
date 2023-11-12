import Image from 'next/image';
import { Project } from 'contentlayer/generated';

import Link from '../link';

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const { slug, image, title, description } = project;

	return (
		<div className='group relative rounded-xl border border-base-700/50 bg-base-800/30 shadow-2xl'>
			<div className='absolute -left-px top-3/4 h-14 w-px bg-gradient-to-b from-transparent via-primary-500 to-transparent opacity-0 transition-all duration-500 group-hover:top-1/4 group-hover:opacity-100' />
			<Link
				className='relative flex flex-col px-6 py-8'
				href={`/projects/${slug}`}
			>
				<Image
					className='w-full rounded-lg sm:max-w-[16rem]'
					width={800}
					height={600}
					alt={title}
					src={image}
					priority
				/>
				<div className='mt-4 text-lg font-bold tracking-tight text-base-300'>
					{title}
				</div>
				<p className='mt-2 line-clamp-2 leading-7 text-base-300/80'>
					{description}
				</p>
			</Link>
		</div>
	);
};

export default ProjectCard;
