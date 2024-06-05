import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
	RiGithubFill,
	RiLinkedinBoxFill,
	RiMailSendFill,
} from 'react-icons/ri';

import GradientText from '@/components/ui/gradient-text';
import Link from '@/components/ui/link';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/cn';

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

const Hero = () => {
	const t = useTranslations('homePage');

	return (
		<section className='space-y-4'>
			<div className='flex items-center gap-4'>
				<Image
					className='animate-fade-in rounded-full bg-foreground/20'
					src='/avatar.png'
					alt='avatar'
					width={80}
					height={80}
					priority
				/>
				<div className='animate-fade-in animation-delay-1'>
					<GradientText
						as='h1'
						className='text-2xl font-bold tracking-tight'
					>
						Tom Jin
					</GradientText>
					<div className='w-fit rounded-lg bg-gradient-to-r from-blue-400 to-teal-400 p-px'>
						<div className='rounded-lg bg-neutral-950/80 text-sm'>
							<GradientText
								as='span'
								className='flex items-center gap-0.5 bg-gradient-to-r from-blue-400 to-teal-400 px-2 py-px text-sm font-medium'
							>
								{t('subTitle')}
							</GradientText>
						</div>
					</div>
				</div>
			</div>
			<p className='animate-fade-in animation-delay-2'>{t('description')}</p>
			<div className='flex animate-fade-in flex-wrap items-center gap-4 animation-delay-3'>
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
						<Icon className='size-5' />
						<span className='hidden sm:inline'>{name}</span>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Hero;
