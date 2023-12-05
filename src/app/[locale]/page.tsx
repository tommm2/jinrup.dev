import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
	RiGithubFill,
	RiLinkedinBoxFill,
	RiMailSendFill,
	RiPushpinLine,
} from 'react-icons/ri';

import Link from '@/components/link';
import PinnedProjects from '@/components/pinned-projects';
import { siteConfig } from '@/config/site';

function HomePage() {
	const t = useTranslations();

	return (
		<>
			<div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
				<Image
					className='animate-in rounded-full bg-base-200'
					src='/images/avatar.png'
					alt='avatar'
					width={80}
					height={80}
					priority
				/>
				<div className='animate-in animation-delay-1'>
					<h1 className='text-2xl font-bold tracking-tight text-base-200'>
						Tom Jin
					</h1>
					<p className='text-base-200/70'>{t('homePage.subTitle')}</p>
				</div>
			</div>
			<p className='mt-8 animate-in animation-delay-2'>
				{t('homePage.description')}
			</p>
			<div className='mt-4 flex animate-in flex-wrap items-center gap-4 animation-delay-3'>
				<Link
					className='opacity-hover inline-flex items-center gap-1 font-medium text-base-300/80'
					aria-label='GitHub'
					title='GitHub'
					href={siteConfig.links.github}
				>
					<RiGithubFill className='h-5 w-5' />
					<span className='hidden sm:inline'>Github</span>
				</Link>
				<Link
					className='opacity-hover inline-flex items-center gap-1 font-medium text-blue-500'
					aria-label='Linkedin'
					title='Linkedin'
					href={siteConfig.links.linkedin}
				>
					<RiLinkedinBoxFill className='h-5 w-5' />
					<span className='hidden sm:inline'>Linkedin</span>
				</Link>
				<Link
					className='opacity-hover inline-flex items-center gap-1 font-medium text-rose-500'
					aria-label='Email'
					title='Email'
					href={`mailto:mail@${siteConfig.email}`}
				>
					<RiMailSendFill className='h-5 w-5' />
					<span className='hidden sm:inline'>Email</span>
				</Link>
			</div>
			<div className='mt-16 animate-in space-y-4 animation-delay-4'>
				<h2 className='flex items-center gap-2 tracking-tight text-base-200'>
					<RiPushpinLine className='h-5 w-5' />
					{t('common.pinned')}
				</h2>
				<PinnedProjects />
			</div>
		</>
	);
}

export default HomePage;
