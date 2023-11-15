import { type Post } from 'contentlayer/generated';

import { groupBy } from '@/utils/helpers';
import { defaultLocale } from './navigation';

type ItemWithSlugAndLanguage = {
	slug: string;
	language: string;
}

export function getItemBySlugAndLocale<T extends ItemWithSlugAndLanguage>(
	items: T[],
	slug: string,
	locale: Locale
) {
	const itemsWithMatchSlug = items.filter((item) => item.slug === slug);
	const index = itemsWithMatchSlug.findIndex((item) => item.language === locale);

	if (index === -1) {
		const defaultItem = itemsWithMatchSlug.find(item => item.language === defaultLocale);

		return defaultItem;
	}

	return itemsWithMatchSlug[index];
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
