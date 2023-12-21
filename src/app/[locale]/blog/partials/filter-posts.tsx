'use client';

import { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import type { Post } from 'contentlayer/generated';

import PostCard from '@/components/post-card';
import { getGroupPostsWithYear } from '@/lib/blog';

type PostListProps = {
	posts: Post[];
	placeholder?: string;
	remindText?: string;
}

function FilterPosts({
	posts,
	placeholder = '',
	remindText = '',
}: PostListProps) {
	const [query, setQuery] = useState('');
	const groupPosts = getGroupPostsWithYear(posts, query);

	return (
		<>
			<div className='relative mt-4'>
				<RiSearch2Line className='absolute left-2 top-2.5 h-5 w-5 text-base-500' />
				<input
					className='w-full rounded-lg border border-base-600/40 bg-base-900 p-2 pl-8 text-sm outline-none ring-primary-500/10 duration-300 placeholder:text-base-500 focus:border-primary-500 focus:ring-4 sm:w-[18.75rem]'
					placeholder={placeholder}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>
			<div className='mt-16 flex flex-col gap-8'>
				{groupPosts.length > 0
					? groupPosts.map(({ year, posts }) => (
						<section key={year}>
							<h2 className='mb-4 flex items-end gap-3 text-lg font-medium tracking-tight'>
								{year}
								<div className='mb-2 h-px w-full bg-base-800'></div>
							</h2>
							<div className='flex flex-col gap-4'>
								{posts.map((post) => (
									<PostCard
										key={post.slug}
										post={post}
									/>
								))}
							</div>
						</section>))
					: remindText}
			</div>
		</>
	);
}

export default FilterPosts;
