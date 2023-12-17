import { ComponentProps, forwardRef } from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';

import { NextIntlLink } from '@/lib/navigation';
import { cn } from '@/utils/cn';

type LinkProps = {
	showAnchorIcon?: boolean;
	anchorIcon?: React.ReactNode;
	locale?: Locale;
} & ComponentProps<'a'>

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props: LinkProps, ref) => {
	const {
		className,
		href = '',
		showAnchorIcon = false,
		anchorIcon = <RiArrowRightUpLine className='mx-1 inline-flex self-center text-current' />,
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
				aria-label={otherProps['aria-label']}
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
