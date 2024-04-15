import { NextIntlClientProvider, useMessages, useTimeZone } from 'next-intl';

type LocaleProviderProps = {
	children?: React.ReactNode;
};

const LocaleProvider = ({ children }: LocaleProviderProps) => {
	const messages = useMessages();
	const timezone = useTimeZone();

	return (
		<NextIntlClientProvider
			messages={messages}
			timeZone={timezone}
		>
			{children}
		</NextIntlClientProvider>
	);
};

export default LocaleProvider;
