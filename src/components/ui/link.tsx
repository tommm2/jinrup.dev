import { type VariantProps, cva } from 'class-variance-authority';
import { Link2 } from 'lucide-react';
import type { ComponentProps } from 'react';

import { Link as LocalizedLink } from '@/lib/navigation';
import { cn } from '@/utils/cn';

const linkVariants = cva(
	'inline-flex items-center justify-center outline-none transition-colors duration-200',
	{
		variants: {
			variant: {
				block:
					'h-8 rounded-lg bg-foreground/10 p-4 text-sm hover:bg-foreground/[0.15]',
				primary:
					'h-10 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90',
				outline:
					'h-10 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground',
				ghost:
					'h-10 rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
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
			<Link2
				role='img'
				className='ml-1 size-4 text-muted-foreground'
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
