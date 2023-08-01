'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { RiArrowUpSLine } from 'react-icons/ri';

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	function _handleClick() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}

	useEffect(() => {
		function _handleScroll() {
			const { scrollTop } = document.documentElement;

			setIsVisible(scrollTop > 10);
		}

		window.addEventListener('scroll', _handleScroll);

		return () => {
			window.removeEventListener('scroll', _handleScroll);
		};
	}, []);

	return (
		<div
			className={clsx(
				'fixed bottom-16 right-6 cursor-pointer rounded-full border border-base-200/20 p-2 shadow-md transition-opacity duration-300 dark:bg-base-900',
				{ 'opacity-0': !isVisible }
			)}
			onClick={_handleClick}
		>
			<RiArrowUpSLine className='h-8 w-8' />
		</div>
	);
};

export default BackToTop;
