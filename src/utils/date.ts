import { format, parseISO } from 'date-fns';

export function formatDate(date: string, formatString = 'LLLL dd') {
	return format(parseISO(date), formatString);
}
