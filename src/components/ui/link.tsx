import { type VariantProps, cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { RiLinkM } from 'react-icons/ri';

import { Link as IntlLink } from '@/lib/navigation';
import { cn } from '@/utils/cn';

const linkVariants = cva(
	'inline-flex items-center outline-none transition-colors',
	{
		variants: {
			variant: {
				block:
					'h-8 rounded-full bg-foreground/10 p-4 text-sm hover:bg-foreground/[0.15]',
			},
		},
	},
);

type LinkProps = Omit<ComponentProps<typeof IntlLink>, 'href'> &
	VariantProps<typeof linkVariants> & {
		href?: string;
		showAnchorIcon?: boolean;
		anchorIcon?: React.ReactNode;
	};

const Link = (props: LinkProps) => {
	const {
		href = '',
		children,
		className,
		variant,
		anchorIcon = <RiLinkM className='ml-1 text-muted-foreground' />,
		showAnchorIcon,
		...otherProps
	} = props;

	if (href.startsWith('http')) {
		otherProps.rel = otherProps.rel ?? 'noopener noreferrer';
		otherProps.target = otherProps.target ?? '_blank';
	}

	if (href.startsWith('/')) {
		return (
			<IntlLink
				className={cn(linkVariants({ variant, className }))}
				href={href}
				{...otherProps}
			>
				{children}
				{showAnchorIcon && anchorIcon}
			</IntlLink>
		);
	}

	return (
		<a
			className={cn(linkVariants({ variant, className }))}
			href={href}
			{...otherProps}
		>
			{children}
			{showAnchorIcon && anchorIcon}
		</a>
	);
};

export default Link;
