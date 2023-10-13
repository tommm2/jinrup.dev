import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['zh-TW', 'en'] as const;

export const pathnames = {
	'/': '/',
	'/projects': '/projects',
	'/blog': '/blog',
	'/about': '/about',
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
