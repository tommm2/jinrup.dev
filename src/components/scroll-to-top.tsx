'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			const { scrollTop } = document.documentElement;

			setIsVisible(scrollTop > 30);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	if (!isVisible) {
		return null;
	}

	return (
		<button
			className='fixed bottom-20 right-8 flex items-center rounded-lg border border-border bg-popover p-2'
			type='button'
			aria-label='back to top'
			onClick={handleClick}
		>
			<ChevronUp className='size-6' />
		</button>
	);
};

export default ScrollToTop;
