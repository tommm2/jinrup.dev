'use client';

import { useEffect, useState } from 'react';

import LanguageDropdown from '@/components/language-dropdown';
import Logo from '@/components/logo';
import MobileNav from '@/components/mobile-nav';
import Nav from '@/components/nav';
import Link from '@/components/ui/link';
import Separator from '@/components/ui/separator';
import { cn } from '@/utils/cn';

const Header = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 180) {
				setIsVisible(false);
			}

			if (window.scrollY < lastScrollY) {
				setIsVisible(true);
			}

			setLastScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollY]);

	return (
		<header
			className={cn(
				'sticky top-6 z-10 flex justify-center transition-transform duration-500 ease-in-out',
				{ '-translate-y-20': !isVisible },
			)}
		>
			<div className='mx-6 p-1 rounded-xl flex w-full items-center justify-between gap-3 border border-border bg-card/50 backdrop-blur sm:w-fit sm:justify-start'>
				<Link
					className='p-3 rounded-xl bg-background'
					href='/'
					aria-label='Home'
				>
					<Logo className='size-5' />
				</Link>
				<div className='flex items-center gap-1 sm:gap-2'>
					<Nav />
					<Separator
						orientation='vertical'
						className='hidden h-6 sm:block'
					/>
					<LanguageDropdown />
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
