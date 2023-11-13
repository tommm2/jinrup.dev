'use client';

import { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { type Post } from 'contentlayer/generated';

import PostCard from '@/components/post-card';
import { groupBy } from '@/utils/helpers';

function getGroupPostsWithYear(posts: Post[], query: string) {
	if (!posts) return [];

	const filteredPosts = !query
		? posts
		: posts.filter(({ title, description }) => {
			const isTitleMatch = title.toLowerCase().includes(query.toLowerCase());
			const isDescriptionMatch = description
				.toLowerCase()
				.includes(query.toLowerCase());

			return isTitleMatch || isDescriptionMatch;
		  });

	const groups = groupBy(filteredPosts, (post) => post.year);

	return Object.keys(groups)
		.map((year) => ({
			year: +year,
			posts: groups[+year],
		}))
		.sort((a, b) => Number(b.year) - Number(a.year));
}

interface PostListProps {
	posts: Post[];
	placeholder?: string;
	remindText?: string;
}

const FilterPosts = ({
	posts,
	placeholder = '',
	remindText = '',
}: PostListProps) => {
	const [query, setQuery] = useState('');

	const groupPosts = getGroupPostsWithYear(posts, query);

	return (
		<>
			<div
				className='relative animate-in'
				style={{ '--index': 2 } as React.CSSProperties}
			>
				<RiSearch2Line className='absolute left-2 top-2.5 h-5 w-5 text-base-500' />
				<input
					className='w-[18.75rem] rounded-xl border border-base-600/40 bg-base-800/20 p-2 pl-8 text-sm outline-none ring-primary-400/10 duration-300 placeholder:text-base-500 focus:border-primary-400 focus:ring-4'
					placeholder={placeholder}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>
			<div
				className='mt-20 flex animate-in flex-col gap-8'
				style={{ '--index': 3 } as React.CSSProperties}
			>
				{groupPosts.map(({ year, posts }) => (
					<div key={year}>
						<div className='mb-4 border-base-400 text-xl font-bold tracking-wide text-base-200'>
							{year}
						</div>
						<ul className='flex flex-col gap-4'>
							{posts.map((post) => (
								<PostCard
									key={post.slug}
									post={post}
								/>
							))}
						</ul>
					</div>
				))}
				{groupPosts.length === 0 ? remindText : null}
			</div>
		</>
	);
}

export default FilterPosts;
