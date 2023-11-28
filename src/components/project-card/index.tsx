import { RiGitRepositoryLine, RiStarLine } from 'react-icons/ri';
import { FaCodeFork } from 'react-icons/fa6';

import Link from '@/components/link';

type ProjectCardProps = {
	project: PinnedRepo;
};

function ProjectCard({ project }: ProjectCardProps) {
	const {
		name,
		primaryLanguage,
		stargazerCount = 0,
		description,
		forkCount = 0,
		url,
	} = project;

	return (
		<div className='space-y-2 rounded-md border border-base-800 bg-base-950 p-4 text-base-300/60'>
			<div className='flex items-center gap-2'>
				<RiGitRepositoryLine className='h-6 w-6' />
				<Link
					className='font-medium text-primary-500 hover:underline'
					href={url}
				>
					{name}
				</Link>
			</div>
			<p className='text-sm'>{description}</p>
			<div className='flex gap-4'>
				<div className='flex items-center gap-0.5 text-sm'>
					<div
						className='h-3 w-3 rounded-full'
						style={{ backgroundColor: primaryLanguage?.color }}
					></div>
					<span>{primaryLanguage?.name}</span>
				</div>
				{stargazerCount > 0 ? (
					<div className='flex items-center gap-0.5'>
						<RiStarLine />
						<span className='text-sm'>{stargazerCount}</span>
					</div>
				) : null}
				{forkCount > 0 ? (
					<div className='flex items-center gap-0.5'>
						<FaCodeFork />
						<span className='text-sm'>{stargazerCount}</span>
					</div>
				) : null}
			</div>
		</div>
	);
}

export default ProjectCard;
