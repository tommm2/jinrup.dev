import type { ComponentProps, FC, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';
import TimelineItem from './timeline-item';
import TimelinePoint from './timeline-point';
import TimelineTime from './timeline-time';

interface TimelineProps extends PropsWithChildren, ComponentProps<'ul'> {}

const Timeline: FC<TimelineProps> = ({
	children,
	className,
}) => {
	return (
		<ul className={cn('border-l border-base-700 pl-4', className)}>
			{children}
		</ul>
	);
};

TimelineItem.displayName = 'Timeline.Item';
TimelinePoint.displayName = 'Timeline.Point';
TimelineTime.displayName = 'Timeline.Time';

export default Object.assign(Timeline, {
	Item: TimelineItem,
	Point: TimelinePoint,
	Time: TimelineTime,
});
