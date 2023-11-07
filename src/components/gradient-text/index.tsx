import { cn } from '@/utils/cn';

interface GradientTextProps {
	className?: string,
	as?: keyof JSX.IntrinsicElements
	children?: React.ReactNode
}

const GradientText = ({
	className,
	as = 'span',
	children,
}: GradientTextProps) => {
	const Component = as;

	return (
		<Component className={cn('w-fit bg-gradient-to-br bg-clip-text text-transparent', className)}>
			{children}
		</Component>
	);
};

export default GradientText;
