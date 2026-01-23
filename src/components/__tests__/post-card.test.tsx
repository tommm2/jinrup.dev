import { render, screen } from '@testing-library/react';

import PostCard from '@/components/post-card';

describe('PostCard', () => {
	const post = {
		title: '測試文章',
		slug: 'test-post',
		publishedAt: '2024-06-12',
		permalink: '/blog/test-post',
	};

	it('should render the post title and link ', () => {
		render(<PostCard {...post} />);

		const link = screen.getByRole('link', { name: /測試文章/i });

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/blog/test-post');
	});

	it('should render formatted date', () => {
		render(<PostCard {...post} />);

		const date = screen.getByText('6月12日');

		expect(date).toBeInTheDocument();
		expect(date).toHaveAttribute('dateTime', '2024-06-12');
	});
});
