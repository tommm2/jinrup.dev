'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface ThemeProviderProps extends PropsWithChildren {}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	return (
		<NextThemeProvider
			attribute='class'
			defaultTheme='dark'
			disableTransitionOnChange
		>
			{children}
		</NextThemeProvider>
	);
};

export default ThemeProvider;
