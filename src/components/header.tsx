'use client';

import { useEffect, useState } from 'react';
import { RiGithubFill, RiStarFill } from 'react-icons/ri';
import useSWR from 'swr';

import LanguageDropdown from '@/components/language-dropdown';
import Logo from '@/components/logo';
import MobileNav from '@/components/mobile-nav';
import Nav from '@/components/nav';
import Link from '@/components/ui/link';
import NumberTicker from '@/components/ui/number-ticker';
import { fetcher } from '@/lib/fetcher';
import { cn } from '@/utils/cn';

const REPO_NAME = 'jinrup.dev';

const Header = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const { data: repo } = useSWR<RepoInfo>(
		`/api/github?repoName=${REPO_NAME}`,
		fetcher,
	);

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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollY]);

	return (
		<header
			className={cn(
				'sticky top-6 z-10 flex px-6 justify-center duration-500 ease-in-out transition-transform',
				{ '-translate-y-20': !isVisible },
			)}
		>
			<div className='flex h-14 w-full items-center justify-between gap-2 rounded-full border border-border bg-neutral-800/50 px-2 backdrop-blur sm:w-fit'>
				<Link
					className='pl-3 pr-1'
					href='/'
					aria-label='Home'
				>
					<Logo className='size-5' />
				</Link>
				<Nav />
				<LanguageDropdown />
				<Link
					className='group relative hidden min-w-24 justify-between gap-2.5 rounded-full border border-border bg-neutral-800 p-2 pr-3 hover:bg-neutral-800/0 sm:inline-flex'
					href='https://github.com/tommm2/jinrup.dev'
				>
					<div className='absolute -bottom-px left-1/2 h-px w-14 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100' />
					<div className='flex items-center gap-1'>
						<RiGithubFill className='size-6 text-foreground/70 group-hover:text-foreground' />
						<span className='text-sm text-foreground/70 group-hover:text-foreground'>
							Github
						</span>
					</div>
					<div className='flex items-center gap-1'>
						<RiStarFill className='transition-colors group-hover:text-yellow-400' />
						<NumberTicker
							className='text-sm tracking-tight text-foreground/70 group-hover:text-foreground'
							value={repo ? repo.stars : 0}
						/>
					</div>
				</Link>
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
