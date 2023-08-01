import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface GradientProps extends PropsWithChildren {
	className?: string
}

const GradientText = ({
	className,
	children,
}: GradientProps) => {
	return (
		<span className={cn('bg-gradient-to-r bg-clip-text text-transparent', className)}>
			{children}
		</span>
	);
};

export default GradientText;
