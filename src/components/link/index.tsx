import { ComponentProps } from 'react';
import { RiExternalLinkLine } from 'react-icons/ri';

import { NextIntlLink } from '@/lib/navigation';
import { cn } from '@/lib/utils';

interface LinkProps extends ComponentProps<'a'> {
	showAnchorIcon?: boolean
	anchorIcon?: React.ReactNode
	locale?: 'zh-TW' | 'en' | undefined
}

const Link = ({
	className,
	href = '',
	showAnchorIcon = false,
	anchorIcon = <RiExternalLinkLine className='mx-1 inline-flex self-center text-current' />,
	locale = undefined,
	children,
	...otherProps
}: LinkProps) => {
	if (href.startsWith('http')) {
		otherProps.rel = otherProps.rel ?? 'noopener noreferrer';
		otherProps.target = otherProps.target ?? '_blank';
	}

	if (href.startsWith('/')) {
		return (
			<NextIntlLink
				className={cn(className)}
				href={href}
				locale={locale}
			>
				{children}
			</NextIntlLink>
		);
	}

	return (
		<a
			className={cn(className)}
			href={href}
			{...otherProps}
		>
			{children}
			{showAnchorIcon && anchorIcon}
		</a>
	);
};

export default Link;
