import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider, useLocale } from 'next-intl';

import { type Post } from '@/content';
import PostCard from '@/components/post-card';
import { defaultLocale } from '@/lib/navigation';

jest.mock('next-intl', () => {
	const originalModule = jest.requireActual('next-intl');

	return {
		...originalModule,
		useLocale: jest.fn(),
	};
});

describe('PostCard', () => {
	const mockPost: Post = {
		title: '測試文章',
		slug: 'test-post',
		publishedAt: '2024-06-12',
		description: '這是一篇測試文章',
		language: defaultLocale,
		permalink: '/blog/test-post',
		content: '',
		year: 2024,
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should render correctly', () => {
		(useLocale as jest.Mock).mockReturnValue(defaultLocale);

		const messages = require(`../../../messages/${defaultLocale}.json`);

		render(
			<NextIntlClientProvider
				messages={messages}
				locale={defaultLocale}
			>
				<PostCard post={mockPost} />
			</NextIntlClientProvider>
		);

		const link = screen.getByRole('link', { name: /測試文章/i });

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', `/${defaultLocale}/blog/test-post`);

		const date = screen.getByText('6月12日');

		expect(date).toBeInTheDocument();
		expect(date).toHaveAttribute('dateTime', '2024-06-12');
	});
});

