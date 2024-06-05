import { type VariantProps, cva } from 'class-variance-authority';
import {
	RiErrorWarningLine,
	RiForbid2Line,
	RiInformationLine,
	RiLightbulbLine,
} from 'react-icons/ri';

import { cn } from '@/utils/cn';

const IconMap = {
	default: <RiLightbulbLine />,
	error: <RiForbid2Line />,
	info: <RiInformationLine />,
	warning: <RiErrorWarningLine />,
};

const calloutVariants = cva(
	'mt-6 flex overflow-x-auto rounded-md border py-2 pr-4',
	{
		variants: {
			variant: {
				default: 'border-amber-500/40 bg-amber-900/40 text-amber-300',
				error: 'border-red-500/40 bg-red-900/40 text-red-300',
				info: 'border-blue-500/40 bg-blue-900/40 text-blue-300',
				warning: 'border-violet-500/40 bg-violet-900/40 text-violet-300',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

type CalloutProps = VariantProps<typeof calloutVariants> & {
	children: React.ReactNode;
};

const Callout = ({ children, variant = 'default' }: CalloutProps) => {
	return (
		<div className={cn(calloutVariants({ variant }))}>
			<div className='select-none pl-3 pr-2 pt-1 text-xl'>
				{IconMap[variant!]}
			</div>
			<div className='w-full min-w-0 leading-7 [&>p]:m-0 [&_strong]:!text-inherit'>
				{children}
			</div>
		</div>
	);
};

export default Callout;
