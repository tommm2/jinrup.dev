import type { Post } from 'contentlayer/generated';

import { groupBy } from '@/utils/helpers';
import { defaultLocale } from './navigation';

export function getPostBySlugAndLocale({
	posts,
	slug,
	locale,
}: {
	posts: Post[];
	slug: string;
	locale: Locale;
}) {
	const postsWithMatchSlug = posts.filter((post) => post.slug === slug);
	const index = postsWithMatchSlug.findIndex((post) => post.language === locale);

	if (index === -1) {
		const defaultPost = postsWithMatchSlug.find(item => item.language === defaultLocale);

		return defaultPost;
	}

	return postsWithMatchSlug[index];
}

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
