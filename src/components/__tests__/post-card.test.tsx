import { render, screen } from '@testing-library/react';

import { type Post } from '@/content';
import PostCard from '@/components/post-card';
import { defaultLocale } from '@/lib/navigation';

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

	it('should render ', () => {
		render(<PostCard post={mockPost} />);

		const link = screen.getByRole('link', { name: /測試文章/i });

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/blog/test-post');

		const date = screen.getByText('6月12日');

		expect(date).toBeInTheDocument();
		expect(date).toHaveAttribute('dateTime', '2024-06-12');
	});
});

