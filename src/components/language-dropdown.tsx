'use client';

import { useTranslations } from 'next-intl';
import { RiTranslate2 } from 'react-icons/ri';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	defaultLocale,
	locales,
	usePathname,
	useRouter,
} from '@/lib/navigation';

const LanguageDropdown = () => {
	const t = useTranslations('common');

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='hidden rounded p-2 shadow-md outline-none transition-colors hover:bg-accent/60 md:block'>
				<span className='sr-only'>{t('chooseLanguage')}</span>
				<RiTranslate2 />
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
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

const LanguageMenuItem = ({ locale }: { locale: Locale }) => {
	const { replace } = useRouter();
	const pathname = usePathname();

	return (
		<DropdownMenuItem
			className='rounded px-2 py-1.5'
			onClick={() => replace(pathname!, { locale })}
		>
			{locale === defaultLocale ? '繁體中文' : 'English'}
		</DropdownMenuItem>
	);
};

export { LanguageDropdown as default, LanguageMenuItem };
