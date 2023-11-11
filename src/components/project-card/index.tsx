import Image from 'next/image';
import { Project } from 'contentlayer/generated';

import Link from '../link';

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const { slug, image, title, description, imageMeta } = project;

	return (
		<div className='group relative rounded-xl border border-base-700/50 bg-base-800/30 shadow-2xl'>
			<div className='absolute -left-px top-3/4 h-14 w-px bg-gradient-to-b from-transparent via-primary-500 to-transparent opacity-0 transition-all duration-500 group-hover:top-1/4 group-hover:opacity-100' />
			<Link
				className='relative flex flex-col px-6 py-8'
				href={`/projects/${slug}`}
			>
				<Image
					className='aspect-[4_/_3] rounded-xl'
					width={imageMeta.size.width || 800}
					height={imageMeta.size.width || 600}
					src={image}
					alt={title}
					placeholder='blur'
					blurDataURL={imageMeta.blur64}
				/>
				<div className='mt-4 flex items-center gap-x-2'>
					<span className='text-lg font-bold tracking-tight text-base-200'>
						{title}
					</span>
				</div>
				<p className='mt-2 line-clamp-2 leading-7 text-base-300'>
					{description}
				</p>
			</Link>
		</div>
	);
};

export default ProjectCard;
