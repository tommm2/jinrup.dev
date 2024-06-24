import { type DateTimeFormatOptions } from 'next-intl';
import Link from 'next/link';
import { redirect, usePathname, useRouter } from 'next/navigation';

export const useMessages = () => ({});

export const useNow = () => new Date();

export const useTimeZone = () => 'Asia/Taipei';

export const useLocale = () => 'zh-TW';

export const useFormatter = () => {
	const formatter = (format: DateTimeFormatOptions) => new Intl.DateTimeFormat('zh-TW', format);

	return {
		date: (date: Date, format: DateTimeFormatOptions) => formatter(format).format(date),
		dateTime: (date: Date, format: DateTimeFormatOptions) => formatter(format).format(date),
	};
};

export const useTranslations = () => {
	const t = (key: string) => key;

	t.rich = (key: string) => key;
	t.markup = (key: string) => key;

	return t;
};

export const NextIntlClientProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => children;

export const createSharedPathnamesNavigation = () => ({
	Link: Link,
	redirect: redirect,
	usePathname: usePathname,
	useRouter: useRouter,
});
