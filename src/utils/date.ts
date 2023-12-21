import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { zhTW } from 'date-fns/locale';

import { defaultLocale } from '@/lib/navigation';

type formatDateType = {
	date: string;
	formatString?: string;
	locale: Locale;
}

export function formatDate({
	date,
	formatString = 'LLLL dd, yyyy',
	locale,
}: formatDateType) {
	return format(parseISO(date), formatString, {
		locale: locale === defaultLocale ? zhTW : undefined,
	});
}

export function getDistanceToNow(date: string, locale: Locale) {
	return formatDistanceToNow(new Date(date), {
		locale: locale === defaultLocale ? zhTW : undefined,
		addSuffix: true,
	},);
}
