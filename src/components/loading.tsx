import { cn } from '@/utils/cn';

type LoadingProps = {
	className?: string;
};

const Loading = ({ className }: LoadingProps) => {
	return (
		<span className={cn('space-x-1', className)}>
			<span className='inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full'>
				&bull;
			</span>
			<span className='inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full'>
				&bull;
			</span>
			<span className='inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full'>
				&bull;
			</span>
		</span>
	);
};

export default Loading;
