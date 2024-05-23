import type { Post, Project } from '@/content';
import { defaultLocale } from '@/lib/navigation';

export function getContentWithFallback<T extends Post | Project>({
	contentItems,
	slug,
	locale,
}: {
	contentItems: T[];
	slug: string;
	locale: Locale;
}): T | undefined {
	const item = contentItems.find(item => item.slug === slug && (item.language === locale || item.language === defaultLocale));

	return item;
}
