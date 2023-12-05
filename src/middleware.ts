import createMiddleware from 'next-intl/middleware';

import {
	locales,
	pathnames,
	defaultLocale,
} from '@/lib/navigation';

export default createMiddleware({
	locales,
	pathnames,
	defaultLocale,
	localePrefix: 'as-needed',
});

export const config = {
	matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
