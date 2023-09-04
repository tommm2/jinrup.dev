import Link from 'next/link';

import { navLinks } from '@/data';
import clsx from 'clsx';

import useOutsideClick from '@/hooks/useOutsideClick';

const Dropdown = () => {
	const { elementRef, isVisible, setIsVisible } = useOutsideClick();

	return (
		<div
			className='block sm:hidden'
			ref={elementRef}
		>
			<button
				className='flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-lg border border-base-300/60 bg-base-100 p-2 dark:border-base-600/40 dark:bg-base-900'
				aria-label='Toggle dropdown button'
				onClick={() => setIsVisible(!isVisible)}
			>
				<div
					className={clsx(
						'h-[3px] w-full rounded-md bg-base-900 transition-transform duration-300 dark:bg-base-200',
						{ 'rotate-45 translate-y-2': isVisible },
					)}
				></div>
				<div
					className={clsx(
						'h-[3px] w-full rounded-md bg-base-900 transition-all duration-300 dark:bg-base-200',
						{ 'opacity-0 translate-x-1': isVisible },
					)}
				></div>
				<div
					className={clsx(
						'h-[3px] w-full rounded-md bg-base-900 transition-all duration-300 dark:bg-base-200',
						{ '-rotate-45 -translate-y-1.5': isVisible },
					)}
				></div>
			</button>
			<div
				className={clsx(
					'fixed right-0 top-16 z-20 rounded-lg border border-transparent bg-base-100 shadow duration-300 dark:border-base-600/40 dark:bg-base-900 sm:hidden',
					{ 'opacity-0 -translate-y-2 pointer-events-none': !isVisible },
				)}
			>
				<ul className='w-[15.625rem] p-1'>
					{navLinks.map((link) => {
						const { title, href, icon } = link;

						return (
							<li
								key={title}
								onClick={() => setIsVisible(false)}
							>
								<Link
									className='text-muted flex items-center gap-2 rounded-lg p-2.5 transition-colors duration-300 hover:bg-base-200 hover:text-base-900 dark:hover:bg-base-800 dark:hover:text-base-200'
									href={href}
								>
									{icon}
									<span>{title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Dropdown;
