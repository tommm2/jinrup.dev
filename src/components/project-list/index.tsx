'use client';

import useSWR from 'swr';

import Loading from '@/components/loading';
import ProjectCard from '@/components/project-card';
import { fetcher } from '@/lib/fetcher';

function ProjectList() {
	const {
		data,
	} = useSWR<Stats>('/api/github', fetcher);

	// if (!projects) {
	// 	return <Loading className='mt-16 flex items-center justify-center' />;
	// }

	return (
		<div className='mt-16 grid animate-in grid-cols-1 gap-4 animation-delay-2 sm:grid-cols-2'>
			stars: {data?.stars} - followers: {data?.followers}
			{/* {projects.map((project) => (
				<ProjectCard
					key={project.id}
					project={project}
				/>
			))} */}
		</div>
	);
}

export default ProjectList;
