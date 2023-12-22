import { ComponentProps, forwardRef } from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';

import { NextIntlLink } from '@/lib/navigation';
import { cn } from '@/utils/cn';

type LinkProps = {
	isBlock?: boolean;
	showAnchorIcon?: boolean;
	anchorIcon?: React.ReactNode;
	locale?: Locale;
} & ComponentProps<'a'>

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props: LinkProps, ref) => {
	const {
		className,
		isBlock = false,
		href = '',
		showAnchorIcon = false,
		anchorIcon = <RiArrowRightUpLine className='inline text-current' />,
		locale,
		children,
		...otherProps
	} = props;

	const blockStyle = isBlock ? 'flex h-8 w-fit items-center gap-1 rounded-full bg-base-800/40 p-4 text-sm text-base-300 transition-colors hover:bg-base-800/80' : '';

	if (href.startsWith('http')) {
		otherProps.rel = otherProps.rel ?? 'noopener noreferrer';
		otherProps.target = otherProps.target ?? '_blank';
	}

	if (href.startsWith('/')) {
		return (
			<NextIntlLink
				className={cn(blockStyle, className)}
				href={href}
				locale={locale}
				aria-label={otherProps['aria-label']}
			>
				{children}
				{showAnchorIcon && anchorIcon}
			</NextIntlLink>
		);
	}

	return (
		<a
			ref={ref}
			className={cn(blockStyle, className)}
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
