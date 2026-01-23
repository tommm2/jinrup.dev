'use client';

import { GitFork, Star } from 'lucide-react';
import useSWR from 'swr';

import type { Project } from '@/content';
import Loading from '@/components/ui/loading';
import Metric from '@/components/ui/metric';
import Link from '@/components/ui/link';
import { fetcher } from '@/lib/fetcher';

type ProjectCardProps = {
	project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	const { title, description, repoName, permalink } = project;

	const { data: repo, isLoading } = useSWR<RepoInfo>(
		`/api/github?repoName=${repoName}`,
		fetcher,
	);

	return (
		<div>
			<Link
				className='block cursor-pointer space-y-2 overflow-hidden rounded-lg border border-border bg-card p-6 hover:bg-card/50'
				href={permalink}
			>
				<h2 className='flex items-center gap-2 font-bold tracking-tight'>
					{title}
				</h2>
				<p
					className='line-clamp-2 text-sm text-muted-foreground'
					title={description}
				>
					{description}
				</p>
				<div className='flex gap-3 text-sm text-muted-foreground'>
					<span className='flex items-center gap-1'>
						<Star className='size-4' />
						{isLoading ? <Loading /> : <Metric stat={repo?.stars} />}
					</span>
					<span className='flex items-center gap-1'>
						<GitFork className='size-4' />
						{isLoading ? <Loading /> : <Metric stat={repo?.forksCount} />}
					</span>
				</div>
			</Link>
		</div>
	);
};

export default ProjectCard;
