'use client';

import { RiGitRepositoryLine, RiQuillPenLine, RiUser3Line } from 'react-icons/ri';

import Link from '@/components/link';
import { usePathname } from '@/lib/navigation';
import { cn } from '@/utils/cn';

const IconMap: { [key: string]: React.ReactNode } = {
	['/blog']: <RiQuillPenLine className='h-5 w-5' />,
	['/projects']: <RiGitRepositoryLine className='h-5 w-5' />,
	['/about']: <RiUser3Line className='h-5 w-5' />,
};

type NavbarLinkProps = {
	type?: 'mobile' | 'desktop';
	title: string;
	href: string;
}

function NavbarLink({
	type = 'desktop',
	title,
	href,
}: NavbarLinkProps) {
	const pathname = usePathname();
	const isActive = pathname.includes(href);

	if (type === 'mobile') {
		const icon = IconMap[href];

		return (
			<Link
				className='group relative flex h-8 items-center gap-2 px-2'
				href={href}
			>
				{icon}
				<div>{title}</div>
				<div className='absolute inset-0 -z-10 rounded-md bg-gradient-to-br from-transparent to-base-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
			</Link>
		);
	}

	return (
		<Link
			className='group relative flex h-8 items-center gap-1.5 pl-5 pr-2'
			href={href}
		>
			<div className='absolute left-2 flex h-1.5 w-1.5 items-center justify-center'>
				<div
					className={cn(
						'absolute duration-300 transition-all will-change-[width,height] inset-auto h-0 w-0 flex-none rounded-full bg-primary-500 group-hover:h-full group-hover:w-full',
						{ 'w-full h-full': isActive },
					)}
				></div>
			</div>
			<div>{title}</div>
			<div className='absolute inset-0 -z-10 rounded-md bg-gradient-to-br from-transparent to-base-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
		</Link>
	);
}

export default NavbarLink;
