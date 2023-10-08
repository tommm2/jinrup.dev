'use client';

import { RiTranslate2 } from 'react-icons/ri';
import clsx from 'clsx';

import useOutsideClick from '@/hooks/useOutsideClick';
import {
	locales,
	Link,
	usePathname,
} from '@/lib/navigation';

const LocaleSwitch = () => {
	const { elementRef, isVisible, setIsVisible } = useOutsideClick();
	const pathname = usePathname();

	return (
		<div
			className='relative hidden sm:block'
			ref={elementRef}
		>
			<button
				className='flex items-center rounded-md p-2 hover:bg-base-800'
				type='button'
				aria-label='Select language'
				onClick={() => setIsVisible(!isVisible)}
			>
				<RiTranslate2 />
			</button>
			<div
				className={clsx(
					'absolute right-1 top-10 z-20 rounded-lg border border-base-600/40 bg-base-900 py-3 shadow duration-300 ',
					{ 'opacity-0 -translate-y-2 pointer-events-none': !isVisible },
				)}
			>
				<div className='flex w-40 flex-col gap-1 px-4'>
					{locales.map(locale => {
						const isDefaultLocale = locale === 'zh-TW';
						const text = isDefaultLocale ? '繁體中文' : 'English';
						const icon = isDefaultLocale ? '🇹🇼' : '🇺🇸';

						return (
							<Link
								key={locale}
								className='flex items-center justify-between transition-colors hover:text-emerald-500'
								href={pathname}
								locale={locale}
							>
								<span>{text}</span>
								<span className='text-xl'>{icon}</span>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default LocaleSwitch;
