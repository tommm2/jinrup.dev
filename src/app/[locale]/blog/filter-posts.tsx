'use client';

import { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';

import type { Post } from '@/content';
import PostCard from '@/components/post-card';
import { getGroupPostsWithYear } from '@/utils/blog';

type FilterPostsProps = {
	posts: Post[];
	placeholder?: string;
	remindText?: string;
};

const FilterPosts = ({
	posts,
	placeholder = '',
	remindText = '',
}: FilterPostsProps) => {
	const [query, setQuery] = useState('');
	const groupPosts = getGroupPostsWithYear(posts, query);

	return (
		<>
			<div className='relative mt-4 animate-fade-in animation-delay-2'>
				<RiSearch2Line className='absolute left-2 top-2.5 size-5 text-foreground/60' />
				<input
					className='w-full rounded-md border border-border bg-input/40 p-2 pl-8 text-sm outline-none ring-blue-500/20 duration-300 placeholder:text-foreground/80 focus:border-primary focus:ring-4 sm:w-[18.75rem]'
					placeholder={placeholder}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>
			<div className='mt-16 flex animate-fade-in flex-col gap-8 animation-delay-3'>
				{
					groupPosts.length > 0
						? groupPosts.map(({ year, posts }) => {
							return (
								<section key={year}>
									<h2 className='mb-4 flex items-end gap-3 text-lg font-medium tracking-tight'>
										{year}
										<div className='mb-2 h-px w-full bg-border'></div>
									</h2>
									<div className='flex flex-col gap-4'>
										{posts.map((post) => (
											<PostCard
												key={post.slug}
												slug={post.slug}
												title={post.title}
												publishedAt={post.publishedAt}
												permalink={post.permalink}
											/>
										))}
									</div>
								</section>
							);
						})
						: remindText}
			</div>
		</>
	);
};

export default FilterPosts;
