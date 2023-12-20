import { RiGithubFill, RiLinkedinBoxFill, RiMailSendFill } from 'react-icons/ri';

import Link from '@/components/link';
import { cn } from '@/utils/cn';
import { siteConfig } from '@/config/site';

type ContactsProps = {
	className?: string;
}

function Contacts({
	className = '',
}: ContactsProps) {
	const baseStyle = 'opacity-hover inline-flex items-center gap-1 font-medium';

	return (
		<div className={cn('flex flex-wrap items-center gap-4', className)}>
			<Link
				className={cn(baseStyle, 'text-base-300/80')}
				aria-label='GitHub'
				title='GitHub'
				href={siteConfig.links.github}
			>
				<RiGithubFill className='h-5 w-5' />
				<span className='hidden sm:inline'>Github</span>
			</Link>
			<Link
				className={cn(baseStyle, 'text-blue-500')}
				aria-label='Linkedin'
				title='Linkedin'
				href={siteConfig.links.linkedin}
			>
				<RiLinkedinBoxFill className='h-5 w-5' />
				<span className='hidden sm:inline'>Linkedin</span>
			</Link>
			<Link
				className={cn(baseStyle, 'text-rose-500')}
				aria-label='Email'
				title='Email'
				href={`mailto:mail@${siteConfig.email}`}
			>
				<RiMailSendFill className='h-5 w-5' />
				<span className='hidden sm:inline'>Email</span>
			</Link>
		</div>
	);
}

export default Contacts;
