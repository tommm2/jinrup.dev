import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { RiCloseFill, RiMenuFill } from 'react-icons/ri';
import { useState } from 'react';

import { LanguageMenuItem } from '@/components/language-dropdown';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import navLinks from '@/config/nav-links';
import { locales } from '@/lib/navigation';

const MobileNav = () => {
	const t = useTranslations('common');
	const [isOpen, setIsOpen] = useState(false);
	const Icon = isOpen ? RiCloseFill : RiMenuFill;

	return (
		<DropdownMenu onOpenChange={(value) => setIsOpen(value)}>
			<DropdownMenuTrigger className='group block rounded-full bg-neutral-800 p-2 outline-none sm:hidden'>
				<Icon className='size-5 text-foreground/70 transition-colors group-hover:text-foreground' />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='min-w-36'
				align='end'
			>
				{navLinks.map((link) => (
					<DropdownMenuItem
						key={link.title}
						asChild
					>
						<Link
							className='w-full gap-2 rounded px-2 py-1.5'
							href={link.href}
						>
							{link.icon}
							{t(link.title)}
						</Link>
					</DropdownMenuItem>
				))}
				<DropdownMenuSeparator />
				<DropdownMenuLabel className='font-normal text-foreground/60'>
					Translations
				</DropdownMenuLabel>
				{locales.map((locale) => (
					<LanguageMenuItem
						key={locale}
						locale={locale}
					/>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default MobileNav;
