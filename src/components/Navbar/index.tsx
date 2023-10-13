import { useTranslations } from 'next-intl';
import { RiMenu2Line, RiTranslate2 } from 'react-icons/ri';

import Dropdown from '@/components/dropdown';
import Link from '@/components/link';
import { navLinks } from '@/data';
import NavbarLink from './navbar-link';
import LocaleList from './locale-list';

const Navbar = () => {
	const t = useTranslations('navigation');

	return (
		<header className='sticky top-0 z-10 h-14 border-b border-base-800 bg-base-900/70 backdrop-blur'>
			<div className='mx-auto flex h-14 max-w-3xl items-center justify-between px-8'>
				<Link href='/'>TOM</Link>
				<div className='hidden items-center gap-2 sm:flex'>
					<nav className='items-center gap-1 text-sm font-medium sm:flex'>
						{navLinks.map((link) => {
							const { href, title } = link;

							return (
								<NavbarLink
									key={title}
									title={t(title)}
									href={href}
								/>
							);
						})}
					</nav>
					<div className='h-4 w-0.5 bg-base-800'></div>
					<Dropdown
						className='hidden sm:block'
						buttonAriaLabel='Select language'
						buttonIcon={<RiTranslate2 className='mt-0.5' />}
					>
						<LocaleList />
					</Dropdown>
				</div>
				<Dropdown
					className='block sm:hidden'
					buttonAriaLabel='open menu'
					buttonIcon={<RiMenu2Line />}
				>
					<nav className='flex flex-col gap-1 px-2 text-sm font-medium'>
						{navLinks.map((link) => {
							const { href, title } = link;

							return (
								<NavbarLink
									key={title}
									type='mobile'
									title={t(title)}
									href={href}
								/>
							);
						})}
					</nav>
					<div className='mx-4 mt-4 border-t border-base-700 py-2 text-sm font-medium opacity-60'>
						Translations
					</div>
					<LocaleList />
				</Dropdown>
			</div>
		</header>
	);
};

export default Navbar;
