'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/data';

import ThemeButton from '../ThemeButton';
import Dropdown from '../Dropdown';
import NavbarLink from './NavbarLink';

const Navbar = () => {
	const pathname = usePathname() || '/';

	return (
		<>
			<header className='layout sticky top-4 z-10'>
				<div className='rounded-xl bg-base-100/60 px-3 py-2 shadow backdrop-blur dark:bg-base-900/60'>
					<div className='flex items-center justify-between'>
						<Link href='/'>Tom Jin</Link>
						<ul className='hidden gap-4 sm:flex'>
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
							<Dropdown />
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
