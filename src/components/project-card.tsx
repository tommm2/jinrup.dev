'use client';

import {
	MotionStyle,
	MotionValue,
	motion,
	useMotionTemplate,
	useMotionValue,
} from 'framer-motion';
import { MouseEvent } from 'react';
import { GoRepoForked } from 'react-icons/go';
import { RiStarLine } from 'react-icons/ri';
import useSWR from 'swr';

import type { Project } from '@/content';
import Loading from '@/components/ui/loading';
import Metric from '@/components/ui/metric';
import Link from '@/components/ui/link';
import { fetcher } from '@/lib/fetcher';

type WrapperStyle = MotionStyle & {
	'--x': MotionValue<string>;
	'--y': MotionValue<string>;
};

type ProjectCardProps = {
	project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const { title, description, repoName, permalink } = project;

	const { data: repo, isLoading } = useSWR<RepoInfo>(
		`/api/github?repoName=${repoName}`,
		fetcher,
	);

	const handleMouseMove = ({
		currentTarget,
		clientX,
		clientY,
	}: MouseEvent<Element>) => {
		const { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	};

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
				className='block cursor-pointer space-y-2 overflow-hidden rounded-lg border border-border bg-card p-6 hover:drop-shadow-[0_0_15px_rgba(39,42,216,0.3)]'
				href={permalink}
			>
				<h2 className='flex items-center gap-2 font-bold tracking-tight'>
					{title}
				</h2>
				<p
					className='line-clamp-2 text-sm text-foreground/80'
					title={description}
				>
					{description}
				</p>
				<div className='flex gap-3 text-sm text-foreground/80'>
					<span className='flex items-center gap-1'>
						<RiStarLine className='text-yellow-500' />
						{isLoading ? <Loading /> : <Metric stat={repo?.stars} />}
					</span>
					<span className='flex items-center gap-1'>
						<GoRepoForked />
						{isLoading ? <Loading /> : <Metric stat={repo?.forksCount} />}
					</span>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectCard;
