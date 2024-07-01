'use client';

import { useTranslations } from 'next-intl';

import Link from '@/components/ui/link';
import navLinks from '@/config/nav-links';
import { usePathname } from '@/lib/navigation';
import { cn } from '@/utils/cn';

const Nav = () => {
	const t = useTranslations('common');
	const pathname = usePathname();

	return (
		<nav>
			<ul className='hidden gap-2 sm:flex'>
				{navLinks.map((item) => {
					const isActive = item.href.toString() === pathname;

					return (
						<li key={item.title}>
							<Link
								className={cn(
									'relative flex items-center rounded px-2 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-accent/60 hover:text-foreground',
									{ 'text-foreground': isActive },
								)}
								href={item.href}
							>
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
