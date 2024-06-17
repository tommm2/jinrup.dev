'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

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

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					className='fixed bottom-20 right-8 flex items-center rounded-lg border border-border bg-popover p-2'
					type='button'
					aria-label='back to top'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					onClick={handleClick}
				>
					<RiArrowUpSLine className='size-6' />
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;
