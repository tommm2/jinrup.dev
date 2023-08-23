'use client';

import { useState } from 'react';
import { Post } from 'contentlayer/generated';

import { formatQuery } from '@/lib/utils';

import Input from '../Input';
import PostCard from '../PostCard';
import Heading from '../Heading';

interface FilterPostsProps {
	posts: Post[]
}

const FilterPosts = ({ posts }: FilterPostsProps) => {
	const [query, setQuery] = useState('');
	const filterPosts = posts.filter(({ title }) => {
		const formattedQuery = formatQuery(query);
		const formattedTitle = formatQuery(title);

		return formattedTitle.includes(formattedQuery);
	});

	return (
		<>
			<Input
				placeholder='請輸入文章標題'
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Heading
				text='所有文章'
				hasUnderline
			/>
			{filterPosts.length !== 0 ? (
				<div className='space-y-4'>
					{filterPosts.map(post => <PostCard key={post.slug} post={post} />)}
				</div>
			) : (
				<div className='text-xl'>未搜尋到相關文章</div>
			)}
		</>
	);
};

export default FilterPosts;
