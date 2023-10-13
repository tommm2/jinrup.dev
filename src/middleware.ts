import createMiddleware from 'next-intl/middleware';

import {
	locales,
	pathnames,
} from '@/lib/navigation';

export default createMiddleware({
	locales,
	pathnames,
	defaultLocale: 'zh-TW',
	localePrefix: 'as-needed',
});

export const config = {
	matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
