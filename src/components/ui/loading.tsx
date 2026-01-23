import { cn } from '@/utils/cn';

type LoadingProps = {
	className?: string;
};

const Loading = ({ className }: LoadingProps) => {
	return (
		<span className={cn(className)}>...</span>
	);
};

export default Loading;
