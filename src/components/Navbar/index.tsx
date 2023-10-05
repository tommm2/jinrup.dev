import Link from 'next/link';
import { useTranslations } from 'next-intl';

import ThemeButton from '../ThemeButton';
import Dropdown from '../Dropdown';
import NavbarItem from './NavbarItem';
import LocaleSelect from '../LocaleSelect';

import { navLinks } from '@/data';

const Navbar = () => {
	const t = useTranslations('navigation');

	return (
		<header className='layout sticky top-0 z-10 backdrop-blur'>
			<div className='px-3 py-2'>
				<div className='flex items-center justify-between'>
					<Link href='/'>Tom Jin</Link>
					<ul className='hidden gap-4 sm:flex'>
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
					<div className='flex items-center gap-3'>
						<ThemeButton />
						<Dropdown />
						<LocaleSelect />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
