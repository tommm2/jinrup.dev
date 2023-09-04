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
				className='relative p-2'
				href={href}
			>
				<span
					className={cn(
						'text-muted transition-colors duration-300 hover:text-base-900 dark:hover:text-base-200',
						{ 'text-base-900 dark:text-base-200': isActive }
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

export default NavbarLink;
