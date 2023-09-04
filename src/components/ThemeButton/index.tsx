'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

const ThemeButton = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const isDark = theme === 'dark';

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className='h-9 w-9' />;
	}

	return (
		<AnimatePresence
			mode='wait'
			initial={false}
		>
			<motion.button
				key={theme}
				className='flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-base-200 dark:bg-amber-500 dark:text-base-900'
				aria-label='Switch website theme'
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 20, opacity: 0 }}
				transition={{ duration: 0.2 }}
				onClick={() => setTheme(isDark ? 'light' : 'dark')}
			>
				{isDark ? <RiSunLine /> : <RiMoonClearLine />}
			</motion.button>
		</AnimatePresence>
	);
};

export default ThemeButton;
