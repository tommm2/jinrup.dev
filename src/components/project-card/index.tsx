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
			<span className='absolute -left-px top-3/4 h-10 w-px bg-gradient-to-b from-transparent via-primary-400 to-transparent opacity-0 transition-all duration-500 group-hover:top-1/4 group-hover:opacity-100' />
			<Link
				className='relative flex flex-col px-8 py-12'
				href={`/projects/${slug}`}
			>
				{/* <Image
					className='rounded-full bg-base-800 p-4'
					width={60}
					height={60}
					src={image}
					alt={title}
					priority
				/> */}
				{/* <div className='absolute -left-5 -top-2 -z-10 p-20'>
					<div className="bg-dots absolute inset-0 rounded-full [mask-image:radial-gradient(black_55%,transparent_75%)]"></div>
					<div className='absolute inset-0 rounded-full [mask-image:radial-gradient(black_42%,transparent_57%)]'>
						<div className='mask-dots absolute inset-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 lg:inset-12'></div>
					</div>
				</div> */}
				<div className='mt-4 flex items-center gap-x-2'>
					<span className='text-xl font-bold tracking-tight text-base-200'>
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
