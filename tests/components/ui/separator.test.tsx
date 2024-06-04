import { render, screen } from '@testing-library/react';

import Separator from '@/components/ui/separator';

describe('Separator', () => {
	it('should render correctly with default orientation', () => {
		render(<Separator />);

		const separator = screen.getByRole('separator');

		expect(separator).toHaveClass('h-[1px] w-full');
	});

	it('should render correctly with vertical orientation', () => {
		render(<Separator orientation='vertical' />);

		const separator = screen.getByRole('separator');

		expect(separator).toHaveClass('h-full w-[1px]');
	});
});
