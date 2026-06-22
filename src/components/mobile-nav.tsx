import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

import { LanguageMenuItem } from '@/components/language-dropdown';
import { ThemeMenuItem, themeOptions } from '@/components/theme-dropdown';
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
	const Icon = isOpen ? X : Menu;

	return (
		<DropdownMenu onOpenChange={(value) => setIsOpen(value)}>
			<DropdownMenuTrigger className='group block rounded-full bg-card p-2 outline-none sm:hidden'>
				<Icon className='size-5 text-muted-foreground transition-colors group-hover:text-foreground' />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='min-w-32'
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
				<DropdownMenuLabel className='font-normal text-muted-foreground'>
					{t('chooseLanguage')}
				</DropdownMenuLabel>
				{locales.map((locale) => (
					<LanguageMenuItem
						key={locale}
						locale={locale}
					/>
				))}
				<DropdownMenuSeparator />
				<DropdownMenuLabel className='font-normal text-muted-foreground'>
					{t('chooseTheme')}
				</DropdownMenuLabel>
				{themeOptions.map((option) => (
					<ThemeMenuItem
						key={option.value}
						{...option}
					/>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default MobileNav;
