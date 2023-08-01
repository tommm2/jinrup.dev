import { format, parseISO, compareDesc } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';
import { Post } from 'contentlayer/generated';

function formatDate(date: string) {
	return format(parseISO(date), 'yyyy-LL-dd');
}

function formatQuery(text: string) {
	return text.replace(/\s/g, '').toLowerCase();
}

function sortPostsByDate(data: Post[]) {
	return data.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));
}

function cn(...classes: ClassValue[]) {
	return twMerge(clsx(...classes));
};

export {
	formatDate,
	formatQuery,
	sortPostsByDate,
	cn,
};
