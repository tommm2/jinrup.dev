import { getRequestConfig } from 'next-intl/server';
import { IntlErrorCode } from 'next-intl';

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`../messages/${locale}.json`)).default,
	timeZone: 'Asia/Taipei',
	getMessageFallback({ namespace, key, error }) {
		const path = [namespace, key].filter((part) => part !== null).join('.');

		if (error.code === IntlErrorCode.MISSING_MESSAGE) {
		  return `${path} is not yet translated`;
		}

		return `please fix this message: ${path}`;
	},
}));
