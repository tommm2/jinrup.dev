import { NextIntlClientProvider, useMessages } from 'next-intl';

import { pick } from '@/utils/helpers';

type ClientIntlProviderProps = {
	messageKey: string;
	children: React.ReactNode;
}

const ClientIntlProvider = ({
	messageKey,
	children,
}: ClientIntlProviderProps) => {
	const messages = useMessages();

	return (
		<NextIntlClientProvider
			messages={
				// Only provide the minimum of messages
				pick(messages, messageKey)
			}
		>
			{children}
		</NextIntlClientProvider>
	);
};

export default ClientIntlProvider;
