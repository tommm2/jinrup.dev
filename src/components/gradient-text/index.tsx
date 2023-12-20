import { cn } from '@/utils/cn';

type GradientTextProps = {
	className?: string;
	as: keyof JSX.IntrinsicElements;
	children: React.ReactNode | string;
};

function GradientText({
	className,
	as,
	children,
}: GradientTextProps) {
	const Component = as;

	return (
		<Component className={cn('w-fit bg-gradient-to-r from-base-200 to-base-200/40 bg-clip-text text-transparent', className)}>
			{children}
		</Component>
	);
}

export default GradientText;
