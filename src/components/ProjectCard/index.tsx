import Link from 'next/link';
import Image from 'next/image';
import { Project } from 'contentlayer/generated';

import Heading from '../Heading';

interface ProjectCardProps {
	project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const {
		url,
		image,
		title,
		summary,
	} = project;

	return (
		<div className='group relative rounded-lg border border-base-200 bg-base-100 shadow transition-all duration-300 hover:shadow-card dark:border-base-800/60 dark:bg-base-900/60 sm:h-[10rem]'>
			<span className='absolute -left-px top-3/4 h-10 w-px bg-gradient-to-b from-transparent via-primary-400 to-transparent opacity-0 transition-all duration-500 group-hover:top-1/4 group-hover:opacity-100' />
			<Link
				className='group relative flex flex-col gap-3 rounded-2xl p-4'
				href={url}
			>
				<Image
					className='rounded-full p-2 shadow dark:border dark:border-base-800'
					width={50}
					height={50}
					priority
					src={image}
					alt={title}
				/>
				<div className='space-y-1'>
					<Heading
						as='h3'
						className='font-bold'
					>
						{title}
					</Heading>
					<summary
						className='line-clamp-2 list-none text-sm text-base-600 dark:text-base-400'
						title={summary}
					>
						{summary}
					</summary>
				</div>
			</Link>
		</div>
	);
};

export default ProjectCard;
