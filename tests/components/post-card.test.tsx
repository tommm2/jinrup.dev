import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider, useLocale } from 'next-intl';

import { type Post } from '@/content';
import PostCard from '@/components/post-card';

jest.mock('next-intl', () => {
	const originalModule = jest.requireActual('next-intl');

	return {
		...originalModule,
		useLocale: jest.fn(),
	};
});

describe('PostCard', () => {
	const mockPost: Post = {
		title: 'Test Post',
		slug: 'test-post',
		publishedAt: '2024-06-12',
		description: 'This is a test post',
		language: 'en',
		permalink: '/blog/test-post',
		content: '',
		year: 2024,
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should render the post title, date, and permalink correctly', () => {
		(useLocale as jest.Mock).mockReturnValue('en');

		const messages = require('../../messages/en.json');

		render(
			<NextIntlClientProvider
				messages={messages}
				locale='en'
			>
				<PostCard post={mockPost} />
			</NextIntlClientProvider>
		);

		const link = screen.getByRole('link', { name: /Test Post/i });

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/en/blog/test-post');

		const date = screen.getByText('June 12');

		expect(date).toBeInTheDocument();
		expect(date).toHaveAttribute('dateTime', '2024-06-12');
	});
});
