'use client';

import { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { type Post } from 'contentlayer/generated';

import PostCard from '@/components/post-card';
import { getGroupPostsWithYear } from '@/lib/contentlayer';

type PostListProps = {
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
				className='relative mt-4 animate-in'
				style={{ '--index': 2 } as React.CSSProperties}
			>
				<RiSearch2Line className='absolute left-2 top-2.5 h-5 w-5 text-base-500' />
				<input
					className='w-[18.75rem] rounded-xl border border-base-600/40 bg-base-900 p-2 pl-8 text-sm outline-none ring-primary-400/10 duration-300 placeholder:text-base-500 focus:border-primary-400 focus:ring-4'
					placeholder={placeholder}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>
			<div
				className='mt-16 flex animate-in flex-col gap-8'
				style={{ '--index': 3 } as React.CSSProperties}
			>
				{groupPosts.map(({ year, posts }) => (
					<div key={year}>
						<div className='mb-4 text-xl font-bold tracking-wide text-base-200'>
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
};

export default FilterPosts;
