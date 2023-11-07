import type { ComponentProps, FC, PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

interface TimelineTimeProps extends PropsWithChildren, ComponentProps<'time'> {}

const TimelineTime: FC<TimelineTimeProps> = ({
	className,
	children,
}) => {
	return (
		<time className={cn('rounded-md bg-primary-400/10 p-1 text-sm text-primary-400', className)}>
			{children}
		</time>
	);
};

export default TimelineTime;
