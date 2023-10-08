'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type Props = {
	title: string
	href: string
}

const NavbarItem = ({ title, href }: Props) => {
	const pathname = usePathname() || '/';
	const isActive = pathname.includes(href);

	return (
		<li>
			<Link
				className={cn(
					'transition-opacity duration-300 hover:opacity-70',
					{ 'text-primary-500': isActive },
				)}
				href={href}
			>
				{title}
			</Link>
		</li>
	);
};

export default NavbarItem;
