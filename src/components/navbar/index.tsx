import { RiArrowDownSLine, RiMenu2Line, RiTranslate2 } from 'react-icons/ri';

import Dropdown from '@/components/dropdown';
import Link from '@/components/link';
import LocaleMenu from '@/components/locale-menu';
import navLinks from '@/data/nav-links';
import NavbarLink from './navbar-link';

function Navbar() {
	return (
		<header className='sticky top-0 z-10 h-14 bg-base-900/80 backdrop-blur'>
			<div className='absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent'></div>
			<div className='mx-auto flex h-14 max-w-[43.75rem] items-center justify-between px-6'>
				<Link href='/'>TOM</Link>
				<div className='hidden items-center gap-2 sm:flex'>
					<nav className='items-center gap-1 text-sm sm:flex'>
						{navLinks.map((link) => {
							const { href, title } = link;

							return (
								<NavbarLink
									key={title}
									title={title}
									href={href}
								/>
							);
						})}
					</nav>
					<div className='h-4 w-0.5 bg-base-800'></div>
					<Dropdown
						className='hidden sm:block'
						buttonAriaLabel='Select language'
						buttonIcon={
							<div className='flex items-center transition-opacity duration-300 hover:opacity-60'>
								<RiTranslate2 className='mt-0.5' />
								<RiArrowDownSLine />
							</div>
						}
					>
						<LocaleMenu />
					</Dropdown>
				</div>
				<Dropdown
					className='block sm:hidden'
					buttonAriaLabel='open menu'
					buttonIcon={<RiMenu2Line />}
				>
					<nav className='flex flex-col gap-1 px-2 text-sm'>
						{navLinks.map((link) => {
							const { href, title } = link;

							return (
								<NavbarLink
									key={title}
									type='mobile'
									title={title}
									href={href}
								/>
							);
						})}
					</nav>
					<p className='mx-4 mt-4 border-t border-base-700 py-2 text-sm font-medium opacity-60'>
						Translations
					</p>
					<LocaleMenu />
				</Dropdown>
			</div>
		</header>
	);
};

export default Navbar;
