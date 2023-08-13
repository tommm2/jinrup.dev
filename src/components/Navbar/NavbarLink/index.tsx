import Link from 'next/link';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface Props {
	link: {
		title: string
		href: string
	}
	isActive?: boolean
}

const NavbarLink = ({ link, isActive }: Props) => {
	const { title, href } = link;

	return (
		<li>
			<Link
				className='group relative px-3 py-1.5'
				href={href}
			>
				<span
					className={cn(
						'transition-colors duration-300 dark:text-base-200/60 dark:group-hover:text-base-200',
						{ 'dark:text-base-200': isActive }
					)}
				>
					{title}
				</span>
				<motion.span layout>
					{isActive ? (
						<motion.span
							className={cn(
								'absolute inset-0 -z-10 rounded-full border border-b-0 border-base-200/40 bg-gradient-to-b from-base-200 to-base-200/20 shadow dark:border-base-700/60 dark:from-base-800 dark:to-base-800/20 dark:shadow-none',

							)}
							layoutId='navbar'
							transition={{ ease: 'anticipate', duration: 0.5 }}
						/>
					) : null}
				</motion.span>
			</Link>
		</li>
	);
};

export default NavbarLink;
