import { Badge } from '@/components/ui/badge';

type TimelineItemProps = {
	date: string;
	role: string;
	company: string;
	companyUrl?: string;
	active?: boolean;
	children?: React.ReactNode;
};

const TimelineItem = ({
	date,
	role,
	company,
	active,
	children,
}: TimelineItemProps) => {
	return (
		<div className='relative pl-8'>
			<span className='absolute -left-1.5 top-0 grid size-3 place-items-center'>
				{active && (
					<span className='absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75' />
				)}
				<span className='relative inline-flex size-3 rounded-full border border-background bg-green-400' />
			</span>
			<Badge
				variant='outline'
				className='p-1.5 rounded-lg bg-primary/[0.05]'
			>
				{date}
			</Badge>
			<div className='font-semibold mt-2'>
				{company} - {role}
			</div>
			{children && (
				<div className='mt-2 text-sm text-muted-foreground'>{children}</div>
			)}
		</div>
	);
};

export default TimelineItem;
