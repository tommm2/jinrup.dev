'use client';

import useSWR from 'swr';

import ProjectCard from '@/components/project-card';
import { fetcher } from '@/lib/fetcher';

function ProjectList() {
	const {
		data: projects,
	} = useSWR<PinnedRepo[]>('/api/github?type=pinnedRepos', fetcher);

	if (!projects) return <></>;

	return (
		<div className='mt-16 grid animate-in grid-cols-1 gap-4 sm:grid-cols-2'>
			{projects.map((project) => (
				<ProjectCard
					key={project.id}
					project={project}
				/>
			))}
		</div>
	);
}

export default ProjectList;
