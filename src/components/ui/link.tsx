import { type VariantProps, cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';

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
	};

const Link = (props: LinkProps) => {
	const { href, children, className, variant, ...otherProps } = props;

	if (!href || href.startsWith('http')) {
		otherProps.rel = otherProps.rel ?? 'noopener noreferrer';
		otherProps.target = otherProps.target ?? '_blank';

		return (
			<a
				className={cn(linkVariants({ variant, className }))}
				href={href}
				{...otherProps}
			>
				{children}
			</a>
		);
	}

	return (
		<IntlLink
			className={cn(linkVariants({ variant, className }))}
			href={href}
			{...otherProps}
		>
			{children}
		</IntlLink>
	);
};

export default Link;
