import { render, screen } from '@testing-library/react';

import Nav from '@/components/nav';
import navLinks from '@/config/nav-links';

jest.mock('@/config/nav-links', () => ([
	{
		title: 'blog',
		href: '/blog',
		icon: <div data-testid='icon' />,
	},
	{
		title: 'projects',
		href: '/projects',
		icon: <div data-testid='icon' />,
	},
]));

describe('Nav', () => {
	it('should render navigation', () => {
		render(<Nav />);

		const nav = screen.getByRole('navigation');

		expect(nav).toBeInTheDocument();
	});

	it('should render all links', () => {
		render(<Nav />);

		const links = screen.getAllByRole('link');

		expect(links).toHaveLength(navLinks.length);

		links.forEach((link, index) => {
			expect(link).toBeInTheDocument();
			expect(link.getAttribute('href')).toBe(navLinks[index].href);
			expect(link).toHaveTextContent(navLinks[index].title);
		});
	});
});
