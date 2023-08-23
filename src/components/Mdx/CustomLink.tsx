import { ComponentProps } from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';

interface CustomLinkProps extends ComponentProps<'a'> {}

const CustomLink = ({
	href = '',
	children,
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
			className='group relative font-bold'
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			{...restProps}
		>
			{children}
			<span className='absolute -bottom-px left-0 h-0.5 w-full bg-primary-500 transition-[width] duration-300 ease-out group-hover:left-[unset] group-hover:right-0 group-hover:w-0' />
			<RiArrowRightUpLine className='h-4 w-4' />
		</a>
	);
};

export default CustomLink;
