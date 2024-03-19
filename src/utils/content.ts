import type { Post, Project } from '@/.velite';
import { defaultLocale } from '@/lib/navigation';

export function getContentBySlugAndLocale<T extends Post | Project>({
	contentItems,
	slug,
	locale,
}: {
	contentItems: T[];
	slug: string;
	locale: Locale;
}): T | undefined {
	const itemsWithMatchingSlug = contentItems.filter((item) => item.slug === slug);
	const index = itemsWithMatchingSlug.findIndex((item) => item.language === locale);

	if (index === -1) {
		const defaultItem = itemsWithMatchingSlug.find(item => item.language === defaultLocale);

		return defaultItem;
	}

	return itemsWithMatchingSlug[index];
}
