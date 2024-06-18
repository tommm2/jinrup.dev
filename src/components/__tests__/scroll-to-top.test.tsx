import { fireEvent, render, screen } from '@testing-library/react';

import ScrollToTop from '@/components/scroll-to-top';

describe('ScrollToTop', () => {
	it('should not be visible initially', () => {
		render(<ScrollToTop />);

		const button = screen.queryByRole('button');

		expect(button).not.toBeInTheDocument();
	});

	it('should appear when scrolled down more than 30 pixels', () => {
		render(<ScrollToTop />);
		document.documentElement.scrollTop = 31;

		fireEvent.scroll(window);

		const button = screen.queryByRole('button');

		expect(button).toBeInTheDocument();
	});

	it('should disappear when scrolled back up less than 31 pixels', () => {
		render(<ScrollToTop />);
		document.documentElement.scrollTop = 30;

		const button = screen.queryByRole('button');

		expect(button).not.toBeInTheDocument();
	});

	it('should scroll to top when clicked', () => {
		render(<ScrollToTop />);
		document.documentElement.scrollTop = 31;
		window.scroll = jest.fn();

		fireEvent.scroll(window);

		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(window.scroll).toHaveBeenCalledWith({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	});
});
