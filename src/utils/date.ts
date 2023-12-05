import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { zhTW } from 'date-fns/locale';

import { defaultLocale } from '@/lib/navigation';

export function formatDate(date: string, formatString = 'LLLL dd', locale: Locale = defaultLocale) {
	return format(parseISO(date), formatString, {
		locale: locale === defaultLocale ? zhTW : undefined,
	});
}

export function getDistanceToNow(date: string, locale: Locale = defaultLocale) {
	return formatDistanceToNow(new Date(date), {
		locale: locale === defaultLocale ? zhTW : undefined,
		addSuffix: true,
	},);
}
