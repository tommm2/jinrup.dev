import { type Post } from 'contentlayer/generated';

import { groupBy } from '@/utils/helpers';
import { defaultLocale } from './navigation';

type ArticleWithSlugAndLanguage = {
	slug: string;
	language: string;
}

export function getArticleBySlugAndLocale<T extends ArticleWithSlugAndLanguage>(
	items: T[],
	slug: string,
	locale: Locale
) {
	const articlesWithMatchSlug = items.filter((article) => article.slug === slug);
	const index = articlesWithMatchSlug.findIndex((article) => article.language === locale);

	if (index === -1) {
		const defaultArticle = articlesWithMatchSlug.find(item => item.language === defaultLocale);

		return defaultArticle;
	}

	return articlesWithMatchSlug[index];
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
