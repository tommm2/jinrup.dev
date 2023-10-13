'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import useOutsideClick from '@/hooks/use-outside-click';
import { usePathname } from '@/lib/navigation';
import { cn } from '@/lib/utils';

interface DropdownProps {
	className?: string
	buttonAriaLabel: string
	buttonIcon: React.ReactNode
	children: React.ReactNode
};

const Dropdown = ({
	className = '',
	buttonAriaLabel,
	buttonIcon,
	children,
}: DropdownProps) => {
	const { elementRef, isVisible, setIsVisible } = useOutsideClick();

	const pathname = usePathname();

	useEffect(() => {
		setIsVisible(false);
	}, [pathname, setIsVisible]);

	return (
		<div ref={elementRef} className={cn('relative', className)}>
			<button
				className='flex h-8 items-center rounded-md p-2 transition-colors duration-300 hover:bg-base-700/60'
				type='button'
				aria-label={buttonAriaLabel}
				onClick={() => setIsVisible(!isVisible)}
			>
				{buttonIcon}
			</button>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						className='absolute right-1 top-10 z-20 rounded-lg border border-base-600/40 bg-base-900 py-3'
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Dropdown;
