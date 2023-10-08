import { useTranslations } from 'next-intl';

import Dropdown from '../Dropdown';
import NavbarItem from './NavbarItem';
import LocaleSwitch from '../LocaleSwitch';

import { navLinks } from '@/data';

const Navbar = () => {
	const t = useTranslations('navigation');

	return (
		<header className='sticky top-0 z-10 border-b border-base-800 backdrop-blur'>
			<div className='layout p-4'>
				<nav className='flex items-center justify-between'>
					<ul className='mr-4 hidden gap-6 sm:flex sm:items-center'>
						{navLinks.map((link) => {
							const { href, title } = link;

							return (
								<NavbarItem
									key={link.title}
									title={t(title)}
									href={href}
								/>
							);
						})}
					</ul>
					<Dropdown />
					<LocaleSwitch />
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
