'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiMore2Fill } from 'react-icons/ri';

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
			className='layout sticky top-0 z-10 pt-4'
			ref={headerRef}
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
				<div className='flex items-center gap-2'>
					<ThemeButton />
					<div className='relative flex sm:hidden'>
						<button
							aria-label='Toggle dropdown button'
							onClick={() => setIsVisible(!isVisible)}
						>
							<RiMore2Fill />
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
