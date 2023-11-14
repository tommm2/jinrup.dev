'use client';

import Link from '@/components/link';
import { locales, usePathname } from '@/lib/navigation';

type LocaleMenuProps = {
	currentLocale: Locale;
}

const LocaleMenu = ({ currentLocale }: LocaleMenuProps) => {
	const pathname = usePathname();

	return (
		<div className='flex w-40 flex-col gap-1 px-2 text-sm'>
			{locales.map(locale => {
				const isMatchCurrentLocale = locale === currentLocale;
				const text = isMatchCurrentLocale ? '繁體中文' : 'English';
				const icon = isMatchCurrentLocale ? '🇹🇼' : '🇺🇸';

				return (
					<Link
						key={locale}
						className='group relative flex h-8 items-center justify-between px-2 font-medium'
						href={pathname}
						locale={locale}
					>
						<span>{text}</span>
						<span className='text-xl'>{icon}</span>
						<div className='absolute inset-0 -z-10 rounded-md bg-gradient-to-br from-transparent to-base-700/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
					</Link>
				);
			})}
		</div>
	);
};

export default LocaleMenu;