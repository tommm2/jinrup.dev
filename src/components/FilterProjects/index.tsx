'use client';

import { useState } from 'react';
import { Project } from 'contentlayer/generated';

import { formatQuery } from '@/lib/utils';

import Input from '../Input';
import ProjectCard from '../ProjectCard';
import TitleRow from '../TitleRow';

interface FilterProjectsProps {
	projects: Project[]
}

const FilterProjects = ({ projects }: FilterProjectsProps) => {
	const [query, setQuery] = useState('');
	const filterProjects = projects.filter(({ title }) => {
		const formattedQuery = formatQuery(query);
		const formattedTitle = formatQuery(title);

		return formattedTitle.includes(formattedQuery);
	});

	return (
		<>
			<Input
				placeholder='請輸入專案標題'
				onChange={(e) => setQuery(e.target.value)}
			/>
			<TitleRow titleText='All Projects' />
			{filterProjects.length !== 0 ? (
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					{filterProjects.map(project => <ProjectCard key={project.slug} project={project} />)}
				</div>
			) : <div className='text-lg'>未搜尋到相關作品</div>}
		</>
	);
};

export default FilterProjects;
