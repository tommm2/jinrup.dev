import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import Link from '@/components/ui/link';
import { defaultLocale } from '@/lib/navigation';

describe('Link', () => {
	it('should render as external link', () => {
		render(<Link href='https://github.com/tommm2'>link</Link>);

		const link = screen.getByRole('link');

		expect(link.getAttribute('href')).toMatch(/^http/);
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noopener noreferrer');
	});

	it('should render as localized link', () => {
		const messages = require(`../../../messages/${defaultLocale}.json`);

		render(
			<NextIntlClientProvider
				messages={messages}
				locale={defaultLocale}
			>
				<Link href='/about'>About</Link>
			</NextIntlClientProvider>,
		);

		const link = screen.getByRole('link');

		expect(link.getAttribute('href')).toMatch(/^\//);
	});

	it('should render default anchor icon', () => {
		render(
			<Link
				href='https://github.com/tommm2'
				showAnchorIcon
			>
				link
			</Link>,
		);

		expect(screen.getByRole('img')).toBeInTheDocument();
	});
});
