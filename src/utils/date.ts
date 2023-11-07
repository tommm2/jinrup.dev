import { format, parseISO } from 'date-fns';

export function formatDate(date: string, dateFormat = 'LLLL d') {
	return format(parseISO(date), dateFormat);
}
