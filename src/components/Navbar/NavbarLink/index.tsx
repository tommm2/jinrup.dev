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
				className='group relative'
				href={href}
			>
				<span
					className={cn(
						'transition-colors duration-300 dark:text-base-200/60 dark:group-hover:text-base-200',
						{ 'text-base-800 dark:text-base-200': isActive }
					)}
				>
					{title}
				</span>
				<motion.span layout>
					{isActive ? (
						<motion.span
							className='absolute inset-x-0 -bottom-1 -z-10 h-0.5 bg-primary-500'
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
