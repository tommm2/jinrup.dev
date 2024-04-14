'use client';

import Link from '@/components/ui/link';

import { usePathname } from '@/lib/navigation';

import { cn } from '@/utils/cn';

type NavLinkProps = {
	title: string;
	href: string;
};

const NavLink = ({ title, href }: NavLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname.includes(href);

	return (
		<li>
			<Link
				className='group relative flex items-center rounded py-1.5 pl-5 pr-2 text-sm transition-colors hover:bg-accent/60'
				href={href}
			>
				<span
					className={cn(
						'absolute duration-200 left-2 transition-all flex-none rounded-full bg-primary group-hover:size-1.5',
						{ 'size-1.5': isActive },
						{ 'size-0': !isActive },
					)}
				/>
				<span>{title}</span>
			</Link>
		</li>
	);
};

export default NavLink;
