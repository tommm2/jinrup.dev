import type { FC } from 'react';

import { cn } from '@/utils/cn';

interface TimelinePointProps {
	isProgressing?: boolean
}

const TimelinePoint: FC<TimelinePointProps> = ({
	isProgressing = false,
}) => {
	return (
		<div className='absolute left-[-21.5px] top-0 flex h-2.5 w-2.5'>
			{isProgressing && (
				<span className='absolute inset-0 animate-ping rounded-full bg-primary-400 dark:bg-primary-400' />
			)}
			<span
				className={cn(
					'h-2.5 w-2.5 rounded-full border-2 border-base-400 bg-base-50 dark:border-base-700 dark:bg-base-950',
					{ 'border-primary-400 dark:border-primary-400': isProgressing }
				)}
			/>
		</div>
	);
};

export default TimelinePoint;
