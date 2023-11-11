import { cn } from '@/utils/cn';

interface PageWrapperProps {
	className?: string;
	children?: React.ReactNode;
}

export default function PageWrapper({ className, children }: PageWrapperProps) {
	return (
		<main className={cn('mx-auto mt-12 min-h-[calc(100vh_-_56px_-_196px)] max-w-[43.75rem] px-8', className)}>
			{children}
		</main>
	);
};
