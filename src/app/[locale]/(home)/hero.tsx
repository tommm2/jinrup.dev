import {
	RiGithubFill,
	RiLinkedinBoxFill,
	RiMailSendFill,
} from 'react-icons/ri';
import Image from 'next/image';

import GradientText from '@/components/gradient-text';
import Link from '@/components/link';
import { cn } from '@/utils/cn';
import { siteConfig } from '@/config/site';

const CONTACTS = [
	{
		name: 'Github',
		href: siteConfig.links.github,
		icon: RiGithubFill,
		colorClass: 'text-base-300/80',
	},
	{
		name: 'Linkedin',
		href: siteConfig.links.linkedin,
		icon: RiLinkedinBoxFill,
		colorClass: 'text-blue-500',
	},
	{
		name: 'Email',
		href: `mailto:mail@${siteConfig.email}`,
		icon: RiMailSendFill,
		colorClass: 'text-rose-500',
	},
];

type HeroProps = {
	name: string;
	subTitle: string;
	description: string;
};

function Hero({ name, subTitle, description }: HeroProps) {
	return (
		<section className='space-y-4'>
			<div className='flex items-center gap-4'>
				<Image
					className='animate-in rounded-full bg-base-200'
					src='/avatar.png'
					alt='avatar'
					width={80}
					height={80}
					priority
				/>
				<div className='animate-in animation-delay-1'>
					<GradientText
						as='h1'
						className='text-2xl font-bold tracking-tight'
					>
						{name}
					</GradientText>
					<div className='w-fit rounded-lg bg-gradient-to-r from-primary-400 to-accent-400 p-px'>
						<div className='rounded-lg bg-base-950/80 text-sm'>
							<GradientText
								as='span'
								className='flex items-center gap-0.5 bg-gradient-to-r from-primary-400 to-accent-400 px-2 py-px text-sm font-medium'
							>
								{subTitle}
							</GradientText>
						</div>
					</div>
				</div>
			</div>
			<p className='animate-in animation-delay-2'>{description}</p>
			<div className='flex animate-in flex-wrap items-center gap-4 animation-delay-3'>
				{CONTACTS.map(({ name, href, icon: Icon, colorClass }) => (
					<Link
						key={name}
						className={cn(
							'opacity-hover inline-flex items-center gap-1 font-medium',
							colorClass,
						)}
						aria-label={name}
						title={name}
						href={href}
					>
						<Icon className='h-5 w-5' />
						<span className='hidden sm:inline'>{name}</span>
					</Link>
				))}
			</div>
		</section>
	);
}

export default Hero;
