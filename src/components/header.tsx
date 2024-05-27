import LanguageDropdown from '@/components/language-dropdown';
import Logo from '@/components/logo';
import MobileNav from '@/components/mobile-nav';
import Nav from '@/components/nav';
import Link from '@/components/ui/link';
import Separator from '@/components/ui/separator';

const Header = () => {
	return (
		<header className='sticky top-0 z-10 h-14 bg-background/80 backdrop-blur'>
			<div className='absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent' />
			<div className='layout flex h-14 items-center justify-between'>
				<Link
					href='/'
					aria-label='Home'
				>
					<Logo className='size-6' />
				</Link>
				<div className='flex items-center gap-4'>
					<Nav />
					<Separator
						className='hidden h-4 md:block'
						orientation='vertical'
					/>
					<LanguageDropdown />
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
