import { fireEvent, render, screen } from '@testing-library/react';

import ScrollToTop from '@/components/scroll-to-top';

const setScrollTop = (value: number) => {
	Object.defineProperty(document.documentElement, 'scrollTop', { value, writable: true });
};

describe('ScrollToTop', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		setScrollTop(0);
	});

	it('should not be visible initially', () => {
		render(<ScrollToTop />);

		const button = screen.queryByRole('button');

		expect(button).not.toBeInTheDocument();
	});

	it('should appear when scrolled down more than 30 pixels', () => {
		render(<ScrollToTop />);

		setScrollTop(31);
		fireEvent.scroll(window);

		const button = screen.queryByRole('button');

		expect(button).toBeInTheDocument();
	});

	it('should disappear when scrolled back up less than 31 pixels', () => {
		render(<ScrollToTop />);

		setScrollTop(30);

		const button = screen.queryByRole('button');

		expect(button).not.toBeInTheDocument();
	});

	it('should scroll to top when clicked', () => {

		render(<ScrollToTop />);

		Object.defineProperty(window, 'scroll', { value: jest.fn() });
		setScrollTop(31);
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
