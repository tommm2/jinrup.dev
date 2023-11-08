'use client';

import { useState } from 'react';
import { type Post } from 'contentlayer/generated';

import Input from '@/components/input';
import PostCard from '@/components/post-card';
import { groupBy } from '@/utils/helpers';

function getGroupPostsWithYear(posts: Post[], query: string) {
	if (!posts) return [];

	const filteredPosts = !query
		? posts
		: posts.filter(({ title, description }) => {
			const isTitleMatch = title.toLowerCase().includes(query.toLowerCase());
			const isDescriptionMatch = description.toLowerCase().includes(query.toLowerCase());

			return isTitleMatch || isDescriptionMatch;
		});

	const groups = groupBy(filteredPosts, (post) => post.year);

	return Object.keys(groups)
		.map((year) => ({
			year: +year,
			posts: groups[+year],
		}))
		.sort((a, b) => Number(b.year) - Number(a.year));
};

interface PostListProps {
	posts: Post[];
	placeholder?: string;
	remindText?: string;
}

export default function FilterPosts({
	posts,
	placeholder = '',
	remindText = '',
}: PostListProps) {
	const [query, setQuery] = useState('');

	const groupPosts = getGroupPostsWithYear(posts, query);

	return (
		<>
			<Input
				placeholder={placeholder}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<div className='mt-20 flex flex-col gap-8'>
				{groupPosts.map(({ year, posts }) => (
					<div key={year}>
						<div className='mb-4 border-base-400 text-2xl font-bold tracking-wide text-base-200'>
							{year}
						</div>
						<ul className='flex flex-col gap-4'>
							{posts.map(post => (
								<PostCard key={post.slug} post={post} />
							))}
						</ul>
					</div>
				))}
				{groupPosts.length === 0 ? remindText : null}
			</div>
		</>
	);
}
