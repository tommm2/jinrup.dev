import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

import { cn } from '@/lib/utils';

interface GradientLinkBLockProps {
	title: string
	icon: React.ReactNode
	content: string
	href: string
	className?: string,
}

const GradientLinkBlock = ({
	title,
	icon,
	content,
	href,
	className = '',
}: GradientLinkBLockProps) =>  {
	return (
		<Link
			className={cn('group relative block rounded-md bg-gradient-to-r p-1', className)}
			href={href}
		>
			<div className='flex items-center justify-between rounded-md bg-base-100/80 p-3 dark:bg-base-900/80'>
				<div>
					<div className='flex items-center gap-2 text-lg'>
						{icon}
						{title}
					</div>
					<p className='mt-4 text-base-950/60 dark:text-base-200/60'>{content}</p>
				</div>
				<RiArrowRightLine className='h-6 w-6 transition-transform duration-300 group-hover:-rotate-45' />
			</div>
			<div className='absolute -inset-0 -z-10 rounded-sm bg-gradient-to-r blur-sm transition-all group-hover:blur-[8px]'></div>
		</Link>
	);
};

export default GradientLinkBlock;
