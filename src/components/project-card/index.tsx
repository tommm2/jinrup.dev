'use client';

import { Project } from 'contentlayer/generated';
import useSWR from 'swr';
import {
	useMotionValue,
	motion,
	useMotionTemplate,
	MotionValue,
	MotionStyle,
} from 'framer-motion';
import Image from 'next/image';
import { MouseEvent } from 'react';
import { RiStarLine } from 'react-icons/ri';
import { GoRepoForked } from 'react-icons/go';

import Link from '@/components/link';
import { fetcher } from '@/lib/fetcher';
import Loading from '../loading';

type Repo = {
	star: number,
	forksCount: number,
}

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
		slug,
		description,
		imageUrl,
	} = project;

	const { data: repo, isLoading } = useSWR<Repo>(`/api/github?slug=${slug}`, fetcher);

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
				className='block cursor-pointer space-y-2 overflow-hidden rounded-lg border border-base-800 bg-gradient-to-br from-base-950 to-base-900/80 p-6 shadow-rose-300 transition duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.1)]'
				href={`/projects/${slug}`}
			>
				<h2 className='font-bold tracking-tight'>{title}</h2>
				<p
					className='line-clamp-2 text-sm text-base-300/80'
					title={description}
				>
					{description}
				</p>
				<div className='flex gap-3 text-sm text-base-300/80'>
					<span className='flex items-center gap-1'>
						<RiStarLine />
						{isLoading ? (
							<Loading />
						) : (
							<span className='-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tracking-tight'>
								{repo?.star.toLocaleString()}
							</span>
						)}
					</span>
					<span className='flex items-center gap-1'>
						<GoRepoForked />
						{isLoading ? (
							<Loading />
						) : (
							<span className='-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tracking-tight'>
								{repo?.forksCount.toLocaleString()}
							</span>
						)}
					</span>
				</div>
			</Link>
		</motion.div>
	);
}

export default ProjectCard;
