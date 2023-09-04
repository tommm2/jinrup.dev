'use client';

import { useEffect, useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import clsx from 'clsx';

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [scrollPercentage, setScrollPercentage] = useState(0);

	function _handleClick() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}

	useEffect(() => {
		function _handleScroll() {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const percentage = Math.round((scrollY / (documentHeight - windowHeight)) * 100);

			setIsVisible(percentage > 10);
			setScrollPercentage(percentage);
		}

		window.addEventListener('scroll', _handleScroll);

		return () => {
			window.removeEventListener('scroll', _handleScroll);
		};
	}, []);

	return (
		<div
			className={clsx(
				'group fixed bottom-20 right-12 z-[11] h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-full border-4 border-base-200 bg-base-200 text-sm transition-all duration-500 dark:border-base-800 dark:bg-base-800',
				{ 'opacity-0 translate-x-32 pointer-events-none': !isVisible }
			)}
			onClick={_handleClick}
		>
			<div
				className='absolute bottom-0 left-0 z-[12] w-full transition-all ease-linear'
				style={{ height: `${scrollPercentage}%` }}
				aria-hidden
			>
				<div className='absolute left-1/2 top-0 z-10 h-[400px] w-[400px] translate-x-[-50%] translate-y-[-75%] rotate-0 animate-wave rounded-[45%] bg-primary-500 opacity-40' />
				<div className='absolute left-1/2 top-0 z-20 h-[400px] w-[400px] translate-x-[-50%] translate-y-[-70%] rotate-0 animate-[wave_10s_linear_-5s_infinite] rounded-[47%] bg-primary-400 opacity-90 dark:bg-primary-500' />
			</div>
			<span className='absolute inset-0 z-[13] flex items-center justify-center font-bold transition-all group-hover:opacity-0'>{scrollPercentage}%</span>
			<span className='absolute inset-0 z-[13] flex flex-col items-center justify-center opacity-0 transition-all group-hover:opacity-100'>
				<RiArrowUpSLine className='h-8 w-8' />
			</span>
		</div>
	);
};

export default BackToTop;
