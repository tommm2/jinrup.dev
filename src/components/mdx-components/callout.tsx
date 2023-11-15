import {
	RiErrorWarningLine,
	RiForbid2Line,
	RiInformationLine,
	RiLightbulbLine,
} from 'react-icons/ri';

import { cn } from '@/utils/cn';

const EmojiMap = {
	default: <RiLightbulbLine />,
	error: <RiForbid2Line />,
	info: <RiInformationLine />,
	warning: <RiErrorWarningLine /> ,
};


type CalloutType = keyof typeof EmojiMap;

const classes: Record<CalloutType, string> = {
	default: 'border-orange-500/40 bg-orange-900/40 text-orange-300',
	error: 'border-red-500/40 bg-red-900/40 text-red-300',
	info: 'border-primary-500/40 bg-primary-900/40 text-primary-300',
	warning: 'border-yellow-500/40 bg-yellow-900/40 text-yellow-300',
};

type CalloutProps = {
	type?: CalloutType;
	emoji?: string | React.ReactNode;
	children: React.ReactNode;
};

const Callout = ({
	children,
	type = 'default',
	emoji = EmojiMap[type],
}: CalloutProps) => {
	return (
		<div className={cn('overflow-x-auto mt-6 flex rounded-md border py-2 pr-4', classes[type])}>
			<div className='select-none pl-3 pr-2 pt-1 text-xl'>
				{emoji}
			</div>
			<div className='w-full min-w-0 leading-7 [&>p]:m-0'>{children}</div>
		</div>
	);
};

export default Callout;
