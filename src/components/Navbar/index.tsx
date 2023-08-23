'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import useClickOutside from '@/hooks/useClickOutside';
import { navLinks } from '@/data';

import ThemeButton from '@/components/ThemeButton';
import Dropdown from '@/components/Dropdown';
import NavbarLink from './NavbarLink';

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
			className='sticky top-8 z-10 mt-8 rounded-xl bg-base-200/40 p-3 backdrop-blur dark:bg-base-900/60'
		>
			<div className='flex items-center justify-between'>
				<Link href='/'>
					Tom Jin
				</Link>
				<ul className='hidden gap-6 sm:flex'>
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
							className='relative flex h-4 w-5 items-center justify-center'
							aria-label='Toggle dropdown button'
							onClick={() => setIsVisible(!isVisible)}
						>
							<span
								className={clsx(
									'absolute right-0 top-1 h-0.5 w-full bg-base-300 transition-all',
									{ 'top-[7px] left-0 -rotate-45': isVisible }
								)}
							/>
							<span
								className={clsx(
									'absolute bottom-1 left-0 h-0.5 w-full bg-base-300 transition-all',
									{ 'top-[7px] left-0 rotate-45': isVisible }
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
