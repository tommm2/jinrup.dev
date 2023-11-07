import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const defaultLocale = 'zh-TW';

export const locales = [defaultLocale, 'en'] as const;

export const pathnames = {
	'/': '/',
	'/projects': '/projects',
	'/blog': '/blog',
} satisfies Pathnames<typeof locales>;

export const {
	Link: NextIntlLink,
	redirect,
	usePathname,
	useRouter,
} = createLocalizedPathnamesNavigation({
	locales,
	pathnames: pathnames as typeof pathnames & Record<string & {}, string>,
});
