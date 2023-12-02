'use client';

import Link from '@/components/link';
import { locales, defaultLocale, usePathname } from '@/lib/navigation';

function LocaleMenu() {
	const pathname = usePathname();

	return (
		<div className='flex w-40 flex-col gap-1 px-2'>
			{locales.map((locale) => {
				const icon = locale === defaultLocale ? '🇹🇼' : '🇺🇸';
				const text = locale === defaultLocale ? '繁體中文' : 'English';

				return (
					<Link
						key={locale}
						className='group relative flex h-8 items-center gap-2 px-2 font-medium'
						href={pathname}
						locale={locale}
					>
						<div className='text-lg'>{icon}</div>
						<div className='text-sm'>{text}</div>
						<div className='absolute inset-0 -z-10 rounded-md bg-gradient-to-br from-transparent to-base-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
					</Link>
				);
			})}
		</div>
	);
}

export default LocaleMenu;
