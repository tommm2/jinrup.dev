import { cn } from '@/lib/utils';

interface HeadingProps {
	className?: string
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	hasUnderline?: boolean
	children?: React.ReactNode | string
}

const Heading = ({
	className = '',
	as = 'h2',
	hasUnderline = false,
	children,
}: HeadingProps) => {
	const Tag = as;

	return (
		<Tag className={cn('font-bold text-base-800 dark:text-base-200 relative', className)}>
			{children}
			{hasUnderline ? (
				<div className='absolute -bottom-1 h-1 w-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500'></div>
			) : null}
		</Tag>
	);
};

export default Heading;
