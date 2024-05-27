'use client';

import { useTranslations } from 'next-intl';

import { navLinks } from '@/config/nav-links';
import { usePathname } from '@/lib/navigation';
import { cn } from '@/utils/cn';

import Link from './ui/link';

const Nav = () => {
	const t = useTranslations('common');
	const pathname = usePathname();

	return (
		<nav>
			<ul className='hidden gap-1 md:flex'>
				{navLinks.map((item) => {
					const isActive = pathname.includes(item.href);

					return (
						<li key={item.title}>
							<Link
								className='group relative flex items-center rounded py-1.5 pl-5 pr-2 text-sm transition-colors hover:bg-accent/60'
								href={item.href}
							>
								<span
									className={cn(
										'absolute duration-200 left-2 transition-all flex-none rounded-full bg-primary group-hover:size-1.5',
										{ 'size-1.5': isActive },
										{ 'size-0': !isActive },
									)}
								/>
								<span>{t(item.title)}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
