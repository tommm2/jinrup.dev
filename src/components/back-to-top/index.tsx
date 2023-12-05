'use client';

import { useEffect, useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';

function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		function handleScroll() {
			const { scrollTop } = document.documentElement;

			setIsVisible(scrollTop > 30);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					className='fixed bottom-20 right-8 flex items-center rounded-lg bg-base-800 p-2'
					type='button'
					aria-label='back to top'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					onClick={handleClick}
				>
					<RiArrowUpSLine className='h-6 w-6' />
				</motion.button>
			)}
		</AnimatePresence>
	);
}

export default BackToTop;
