import { siteConfig } from '@/config/site';
import { defaultLocale } from '@/lib/navigation';

type GenerateUrlOptions = {
	locale: Locale;
	pathname?: '' | 'blog' | 'about';
	slug?: string;
}

export function getLocalizedUrl({
	locale,
	pathname = '',
	slug = '',
}:GenerateUrlOptions) {
	let localPrefix = locale === defaultLocale ? '' : 'en/';
	let url = `${siteConfig.siteUrl}/${localPrefix}${pathname}`;

	if (slug) {
		url += `/${slug}`;
	}

	return url;
}
