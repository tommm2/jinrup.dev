import { siteConfig } from '@/config/site';
import { defaultLocale } from '@/lib/navigation';

export function getLocalizedUrl({
	locale,
	pathname = '',
	slug = '',
}:{
	locale: Locale;
	pathname?: '' | 'blog' | 'about' | 'projects';
	slug?: string;
}) {
	let localPrefix = locale === defaultLocale ? '' : 'en';

	let url = [localPrefix, pathname, slug].join('/');

	return url;
}
