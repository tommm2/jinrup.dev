'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useClickOutside } from '@/hooks';
import { usePathname } from '@/lib/navigation';
import { cn } from '@/utils/cn';

type DropdownProps = {
	className?: string;
	buttonAriaLabel: string;
	buttonIcon: React.ReactNode;
	children: React.ReactNode;
};

function Dropdown({
	className = '',
	buttonAriaLabel,
	buttonIcon,
	children,
}: DropdownProps) {
	const dropdownRef = useRef(null);
	const pathname = usePathname();
	const [isVisible, setIsVisible] = useState(false);

	useClickOutside(dropdownRef, () => setIsVisible(false));

	useEffect(() => {
		setIsVisible(false);
	}, [pathname]);

	return (
		<div
			className={cn('relative', className)}
			ref={dropdownRef}
		>
			<button
				className='flex h-8 items-center p-2'
				type='button'
				aria-label={buttonAriaLabel}
				onClick={() => setIsVisible(!isVisible)}
			>
				{buttonIcon}
			</button>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						className='absolute right-0 top-10 z-20 rounded-xl border border-base-800 bg-base-950 py-3'
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
}

export default Dropdown;
