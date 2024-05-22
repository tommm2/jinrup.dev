import { render, screen } from '@testing-library/react';

import Link from '@/components/ui/link';

describe('Link', () => {
	it('renders correctly when href starts with http', () => {
		render(<Link href='https://example.com'>Example Link</Link>);

		expect(screen.getByText('Example Link')).toBeInTheDocument();
		expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
		expect(screen.getByRole('link')).toHaveAttribute(
			'rel',
			'noopener noreferrer',
		);
	});
});
