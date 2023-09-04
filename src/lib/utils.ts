import { format, parseISO, compareDesc } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';
import { Post } from 'contentlayer/generated';

function formatDate(date: string, dateFormat = 'LLLL d, yyyy') {
	return format(parseISO(date), dateFormat);
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

function convertToSlug(context: string) {
	return context.replace(/\.mdx$/, '');
}

export {
	formatDate,
	formatQuery,
	sortPostsByDate,
	cn,
	convertToSlug,
};
