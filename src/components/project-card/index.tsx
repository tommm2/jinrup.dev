'use client';

import type { Project } from '@/.velite';
import useSWR from 'swr';
import {
	useMotionValue,
	motion,
	useMotionTemplate,
	MotionValue,
	MotionStyle,
} from 'framer-motion';
import { MouseEvent } from 'react';
import { RiStarLine } from 'react-icons/ri';
import { GoRepoForked } from 'react-icons/go';

import Link from '@/components/link';
import Loading from '@/components/loading';
import Metric from '@/components/metric';
import { fetcher } from '@/lib/fetcher';

type WrapperStyle = MotionStyle & {
	'--x': MotionValue<string>;
	'--y': MotionValue<string>;
};

type ProjectCardProps = {
	project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const {
		title,
		description,
		repoName,
		permalink,
	} = project;

	const { data: repo, isLoading } = useSWR<RepoInfo>(`/api/github?repoName=${repoName}`, fetcher);

	function handleMouseMove({
		currentTarget,
		clientX,
		clientY,
	}: MouseEvent<Element>) {
		const { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<motion.div
			className='animated-cards relative'
			style={
				{
					'--x': useMotionTemplate`${mouseX}px`,
					'--y': useMotionTemplate`${mouseY}px`,
				} as WrapperStyle
			}
			onMouseMove={handleMouseMove}
		>
			<Link
				className='block cursor-pointer space-y-2 overflow-hidden rounded-lg border border-base-800 bg-gradient-to-br from-base-950 to-base-900/80 p-6 shadow-rose-300 transition duration-300 hover:drop-shadow-[0_0_15px_rgba(39,42,216,0.3)]'
				href={permalink}
			>
				<h2 className='flex items-center gap-2 font-medium tracking-tight'>
					{title}
				</h2>
				<p
					className='line-clamp-2 text-sm text-base-300/80'
					title={description}
				>
					{description}
				</p>
				<div className='flex gap-3 text-sm text-base-300/80'>
					<span className='flex items-center gap-1'>
						<RiStarLine className='text-yellow-500' />
						{isLoading ? <Loading /> : <Metric stat={repo?.stars} />}
					</span>
					<span className='flex items-center gap-1'>
						<GoRepoForked />
						{isLoading ?  <Loading /> : <Metric stat={repo?.forksCount} />}
					</span>
				</div>
			</Link>
		</motion.div>
	);
}

export default ProjectCard;
