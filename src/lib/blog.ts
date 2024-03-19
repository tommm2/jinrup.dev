import type { Post } from '@/.velite';

import { groupBy } from '@/utils/helpers';

export function getGroupPostsWithYear(posts: Post[], query: string) {
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
