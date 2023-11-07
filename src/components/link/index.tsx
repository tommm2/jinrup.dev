import { ComponentProps, forwardRef } from 'react';
import { RiExternalLinkLine } from 'react-icons/ri';

import { NextIntlLink } from '@/lib/navigation';
import { cn } from '@/utils/cn';

interface LinkProps extends ComponentProps<'a'> {
	showAnchorIcon?: boolean
	anchorIcon?: React.ReactNode
	isBlock?: boolean
	locale?: Locale | undefined
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props: LinkProps, ref) => {
	const {
		className,
		href = '',
		showAnchorIcon = false,
		anchorIcon = <RiExternalLinkLine className='mx-1 inline-flex self-center text-current' />,
		isBlock = false,
		locale,
		children,
		...otherProps
	} = props;

	const blockStyle = isBlock
		? 'relative after:content-[""] after:bg-base-800 after:opacity-0 after:transition-opacity after:duration-300 after:rounded-lg after:absolute after:inset-0 hover:after:opacity-100 after:-z-10'
		: '';

	if (href.startsWith('http')) {
		otherProps.rel = otherProps.rel ?? 'noopener noreferrer';
		otherProps.target = otherProps.target ?? '_blank';
	}

	if (href.startsWith('/')) {
		return (
			<NextIntlLink
				className={cn(className, blockStyle)}
				href={href}
				locale={locale}
			>
				{children}
			</NextIntlLink>
		);
	}

	return (
		<a
			ref={ref}
			className={cn(className, blockStyle)}
			href={href}
			{...otherProps}
		>
			{children}
			{showAnchorIcon && anchorIcon}
		</a>
	);
});

Link.displayName = 'Link';

export default Link;
