'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { Check, Monitor, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const themeOptions = [
	{ value: 'light', icon: Sun, labelKey: 'themeLight' },
	{ value: 'dark', icon: Moon, labelKey: 'themeDark' },
	{ value: 'system', icon: Monitor, labelKey: 'themeSystem' },
] as const;

const useMounted = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted;
};

const ThemeMenuItem = ({
	value,
	icon: Icon,
	labelKey,
}: (typeof themeOptions)[number]) => {
	const t = useTranslations('common');
	const { theme, setTheme } = useTheme();
	const mounted = useMounted();

	return (
		<DropdownMenuItem
			className='flex items-center gap-2 rounded px-2 py-1.5'
			onClick={() => setTheme(value)}
		>
			<Icon className='size-4' />
			<span className='flex-1'>{t(labelKey)}</span>
			{mounted && theme === value && <Check className='size-3.5' />}
		</DropdownMenuItem>
	);
};

const ThemeDropdown = () => {
	const t = useTranslations('common');
	const { resolvedTheme } = useTheme();
	const mounted = useMounted();

	const TriggerIcon = mounted && resolvedTheme === 'light' ? Sun : Moon;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='hidden rounded p-2 text-muted-foreground shadow-md outline-none transition-colors hover:bg-accent/60 hover:text-foreground sm:block'>
				<span className='sr-only'>{t('chooseTheme')}</span>
				<TriggerIcon className='size-4' />
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
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

export { ThemeDropdown as default, ThemeMenuItem };
