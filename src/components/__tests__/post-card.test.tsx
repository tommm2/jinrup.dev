import { render, screen } from '@testing-library/react';

import PostCard from '@/components/post-card';
import useIntersection from '@/hooks/use-intersection';

jest.mock('@/hooks/use-intersection', () => jest.fn());
jest.mock('@/components/view-counter', () => {
	const ViewCounter = () => <div data-testid='view-counter' />;

	return ViewCounter;
});

describe('PostCard', () => {
	const post = {
		title: '測試文章',
		slug: 'test-post',
		publishedAt: '2024-06-12',
		permalink: '/blog/test-post',
	};

	beforeEach(() => {
		(useIntersection as jest.Mock).mockReturnValue({
			isIntersecting: false,
		});
	});

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

	it('should not render ViewCounter when enabled is false', () => {
		render(<PostCard {...post} />);

		const viewCounter = screen.queryByTestId('view-counter');

		expect(viewCounter).not.toBeInTheDocument();
	});

	it('should render ViewCounter when enabled is true', () => {
		(useIntersection as jest.Mock).mockReturnValue({
			isIntersecting: true,
		});
		render(<PostCard {...post} />);

		const viewCounter = screen.getByTestId('view-counter');

		expect(viewCounter).toBeInTheDocument();
	});
});
