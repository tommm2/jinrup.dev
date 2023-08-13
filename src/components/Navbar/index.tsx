'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiMore2Fill } from 'react-icons/ri';

import useClickOutside from '@/hooks/useClickOutside';
import { navLinks } from '@/data';

import ThemeButton from '@/components/ThemeButton';
import Dropdown from '@/components/Dropdown';
import NavbarLink from './NavbarLink';
import { cn } from '@/lib/utils';

const Navbar = () => {
	const pathname = usePathname() || '/';
	const {
		elementRef: headerRef,
		isVisible,
		setIsVisible,
	} = useClickOutside();

	return (
		<nav
			ref={headerRef}
			className='sticky top-0 z-10 pt-4'
		>
			<div className='flex items-center justify-between rounded-full border border-base-200 bg-base-200/20 px-4 py-3 backdrop-blur dark:border-base-800 dark:bg-base-900/60'>
				<Link href='/'>
					Tom Jin
				</Link>
				<ul className='hidden gap-2 sm:flex'>
					{navLinks.map((link) => {
						const { href } = link;
						const isActive = pathname.includes(href);

						return (
							<NavbarLink
								key={link.title}
								link={link}
								isActive={isActive}
							/>
						);
					})}
				</ul>
				<div className='flex items-center gap-3'>
					<ThemeButton />
					<div className='relative sm:hidden'>
						<button
							className='group relative flex h-4 w-5 items-center justify-center'
							aria-label='Toggle dropdown button'
							onClick={() => setIsVisible(!isVisible)}
						>
							<span
								className={cn(
									'absolute right-0 top-0 h-0.5 w-1/2 bg-base-300 transition-all ease-linear group-hover:w-full',
									{ 'top-[7px] left-0 -rotate-45 w-full': isVisible }
								)}
							/>
							<span className={cn('block h-0.5 grow bg-base-300', { 'hidden': isVisible })} />
							<span
								className={cn(
									'absolute bottom-0 left-0 h-0.5 w-1/2 bg-base-300 transition-all  ease-linear group-hover:w-full',
									{ 'top-[7px] left-0 w-full rotate-45': isVisible }
								)}
							/>
						</button>
						<Dropdown
							isVisible={isVisible}
							onClose={() => setIsVisible(false)}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
