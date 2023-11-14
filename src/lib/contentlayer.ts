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
