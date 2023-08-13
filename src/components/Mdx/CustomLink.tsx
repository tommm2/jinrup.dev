import { ComponentPropsWithoutRef } from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';

import { cn } from '@/lib/utils';

interface CustomLinkProps extends ComponentPropsWithoutRef<'a'> {}

const CustomLink = ({
	href = '',
	children,
	className = '',
	...restProps
}: CustomLinkProps) => {
	if (href.startsWith('#')) {
		return (
			<a
				href={href}
				{...restProps}
			/>
		);
	}

	return (
		<a
			className={cn('relative before:absolute before:bottom-0 before:h-0.5 before:w-full before:bg-base-300 dark:before:bg-base-700 before:content-[""] hover:before:bg-primary-400', className)}
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			{...restProps}
		>
			<span>{children}</span>
			<RiArrowRightUpLine />
		</a>
	);
};

export default CustomLink;
