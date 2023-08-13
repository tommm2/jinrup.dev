import { MouseEventHandler } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { navLinks } from '@/data';
import { RiFolder2Line, RiQuillPenLine, RiTimeLine, RiUserLine } from 'react-icons/ri';

const IconMap: { [key: string]: JSX.Element } = {
	['/blog']: <RiQuillPenLine />,
	['/projects']: <RiFolder2Line />,
	['/about']: <RiUserLine />,
	['/timeline']: <RiTimeLine />,
};

interface DropdownProps {
	isVisible: boolean
	onClose: MouseEventHandler
}

const Dropdown = ({
	isVisible,
	onClose,
}: DropdownProps) => {
	return (
		<div
			className={cn(
				'absolute -right-2 top-12 duration-200',
				{ 'opacity-0 -translate-y-2 pointer-events-none': !isVisible }
			)}
		>
			<ul className='w-[15.625rem] rounded-lg border border-base-300/60 bg-base-100 p-1 dark:border-base-600/40 dark:bg-base-900'>
				{navLinks.map((link) => {
					const { title, href } = link;

					return (
						<li
							key={title}
							onClick={onClose}
						>
							<Link
								className='flex items-center gap-2 rounded-lg p-2.5 transition-colors duration-300 hover:bg-base-200 dark:hover:bg-base-800'
								href={href}
							>
								{IconMap[href]}
								<span>{title}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Dropdown;
