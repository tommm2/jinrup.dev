import { type VariantProps, cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { RiLinkM } from 'react-icons/ri';

import { Link as LocalizedLink } from '@/lib/navigation';
import { cn } from '@/utils/cn';

const linkVariants = cva(
	'inline-flex items-center outline-none transition-colors',
	{
		variants: {
			variant: {
				block:
					'h-8 rounded-lg bg-foreground/10 p-4 text-sm hover:bg-foreground/[0.15]',
			},
		},
	},
);

type LinkProps = Omit<ComponentProps<typeof LocalizedLink>, 'href'> &
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
		anchorIcon = (
			<RiLinkM
				role='img'
				className='ml-1 text-muted-foreground'
			/>
		),
		showAnchorIcon,
		...otherProps
	} = props;

	const icon = showAnchorIcon && anchorIcon;

	if (href.startsWith('http')) {
		otherProps.rel = otherProps.rel ?? 'noopener noreferrer';
		otherProps.target = otherProps.target ?? '_blank';
	}

	if (href.startsWith('/')) {
		return (
			<LocalizedLink
				className={cn(linkVariants({ variant, className }))}
				href={href}
				{...otherProps}
			>
				{children}
				{icon}
			</LocalizedLink>
		);
	}

	return (
		<a
			className={cn(linkVariants({ variant, className }))}
			href={href}
			{...otherProps}
		>
			{children}
			{icon}
		</a>
	);
};

export default Link;
