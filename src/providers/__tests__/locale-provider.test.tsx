import { render, screen } from '@testing-library/react';

import LocaleProvider from '@/providers/locale-provider';

jest.mock('next-intl', () => ({
	useMessages: jest.fn(() => ({ 'zh-TW': { greeting: '哈囉' } })),
	NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
	useTimeZone: jest.fn(() => 'Asia/Taipei'),
}));

describe('LocaleProvider', () => {
	it('should render children with messages and timeZone', () => {
	  render(
			<LocaleProvider>
				<div>Child Component</div>
			</LocaleProvider>
	  );

	  expect(screen.getByText('Child Component')).toBeInTheDocument();

	  expect(require('next-intl').useMessages).toHaveBeenCalled();
	  expect(require('next-intl').useTimeZone).toHaveBeenCalled();
	});
});
