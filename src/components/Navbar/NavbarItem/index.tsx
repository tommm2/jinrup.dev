'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface NavbarItemProps {
	title: string
	href: string
}

const NavbarItem = ({ title, href }: NavbarItemProps) => {
	const pathname = usePathname() || '/';
	const isActive = pathname.includes(href);

	return (
		<li>
			<Link
				className='relative p-2'
				href={href}
			>
				<span
					className={clsx(
						'text-muted transition-colors duration-300 hover:text-base-900 dark:hover:text-base-200',
						{ 'text-base-900 dark:text-base-200': isActive },
					)}
				>
					{title}
				</span>
				<motion.span layout>
					{isActive ? (
						<motion.span
							className='absolute inset-0 -z-10 rounded-lg bg-base-200 dark:bg-base-800'
							layoutId='navbar'
							transition={{ ease: 'anticipate', duration: 0.5 }}
						/>
					) : null}
				</motion.span>
			</Link>
		</li>
	);
};

export default NavbarItem;
