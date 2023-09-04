import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ComponentProps } from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';

interface CustomLinkProps extends ComponentProps<'a'> {}

const CustomLink = ({
	href = '',
	children,
	className,
	...restProps
}: CustomLinkProps) => {
	if (href.startsWith('/')) {
		return (
			<Link
				className={cn(
					'text-muted relative font-medium duration-300 ease-linear after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-base-950 after:transition-transform after:duration-300 after:ease-in-out after:will-change-transform after:content-[""] hover:text-base-950 hover:after:origin-left hover:after:scale-100 dark:after:bg-base-200 dark:hover:text-base-200',
					className,
				)}
				href={href}
			>
				{children}
			</Link>
		);
	}

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
			className={cn(
				'text-muted relative font-medium duration-300 ease-linear after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-base-950 after:transition-transform after:duration-300 after:ease-in-out after:will-change-transform after:content-[""] hover:text-base-950 hover:after:origin-left hover:after:scale-100 dark:after:bg-base-200 dark:hover:text-base-200',
				className,
			)}
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			{...restProps}
		>
			{children}
			<RiArrowRightUpLine className='h-4 w-4' />
		</a>
	);
};

export default CustomLink;
