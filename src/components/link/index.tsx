import { ComponentProps, forwardRef } from 'react';
import { RiExternalLinkLine } from 'react-icons/ri';

import { NextIntlLink } from '@/lib/navigation';
import { cn } from '@/utils/cn';

interface LinkProps extends ComponentProps<'a'> {
	showAnchorIcon?: boolean
	anchorIcon?: React.ReactNode
	locale?: Locale | undefined
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props: LinkProps, ref) => {
	const {
		className,
		href = '',
		showAnchorIcon = false,
		anchorIcon = <RiExternalLinkLine className='mx-1 inline-flex self-center text-current' />,
		locale,
		children,
		...otherProps
	} = props;

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
			ref={ref}
			className={cn(className)}
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
