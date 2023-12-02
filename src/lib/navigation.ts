import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

import { siteConfig } from '@/config/site';

export const defaultLocale = 'zh-TW';

export const locales = [defaultLocale, 'en'] as const;

export const pathnames = {
	'/': '/',
	'/blog': '/blog',
} satisfies Pathnames<typeof locales>;

export function getUrlWithLocale(
	locale: Locale,
	path: string,
	slug?: string
) {
	const pathPrefix = locale === defaultLocale ? path : `en/${path}`;
	let url = `${siteConfig.siteUrl}/${pathPrefix}`;

	if (slug) {
		url += `/${slug}`;
	}

	return url;
}

export const {
	Link: NextIntlLink,
	redirect,
	usePathname,
	useRouter,
} = createLocalizedPathnamesNavigation({
	locales,
	pathnames: pathnames as typeof pathnames & Record<string & {}, string>,
});

