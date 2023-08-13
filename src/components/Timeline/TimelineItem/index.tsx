import type { FC, PropsWithChildren } from 'react';

interface TimelineItemProps extends PropsWithChildren {}

const TimelineItem: FC<TimelineItemProps> = ({
	children,
}) => {
	return (
		<li className='relative mt-4 space-y-2'>
			{children}
		</li>
	);
};

export default TimelineItem;
