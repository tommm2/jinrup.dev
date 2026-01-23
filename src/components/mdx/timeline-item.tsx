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
					<span className='absolute inline-flex size-full animate-ping rounded-full bg-foreground opacity-75' />
				)}
				<span className='relative inline-flex size-3 rounded-full border border-background bg-foreground' />
			</span>
			<Badge
				variant='outline'
				className='p-1.5 rounded-xl'
			>
				{date}
			</Badge>
			<div className='text-base font-medium'>
				<div className='mt-1'>
					<strong>{company}</strong> - {role}
				</div>
			</div>
			{children && (
				<div className='mt-2 text-sm text-muted-foreground'>{children}</div>
			)}
		</div>
	);
};

export default TimelineItem;
