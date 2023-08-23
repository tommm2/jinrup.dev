import Link from 'next/link';
import Image from 'next/image';
import { Project } from 'contentlayer/generated';

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
		<div className='group relative border border-base-200 bg-base-100 transition-all duration-300 hover:shadow-card dark:border-base-800 dark:bg-base-900'>
			<span className='absolute -left-px top-3/4 h-10 w-px bg-gradient-to-b from-transparent via-primary-400 to-transparent opacity-0 transition-all duration-500 group-hover:top-1/4 group-hover:opacity-100' />
			<Link
				className='group relative flex items-center gap-3 rounded-2xl p-4'
				href={url}
			>
				<Image
					className='shrink-0 rounded-lg saturate-100 transition-[filter] duration-300 group-hover:saturate-150'
					width={70}
					height={70}
					priority
					src={image}
					alt={title}
				/>
				<div>
					<p className='text-title text-lg'>{title}</p>
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
