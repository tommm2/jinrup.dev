import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import {
	RiArrowRightFill,
	RiGitRepositoryFill,
	RiGithubFill,
	RiHammerFill,
	RiLinkedinBoxFill,
	RiMailSendFill,
} from 'react-icons/ri';

import Link from '@/components/link';
import { siteConfig } from '@/config/site';
import { allProjects } from 'contentlayer/generated';
import ProjectCard from '@/components/project-card';

function HomePage() {
	const t = useTranslations();
	const locale = useLocale();
	const projects = allProjects.filter(item => item.language === locale);

	return (
		<>
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
					<h1 className='text-2xl font-bold tracking-tight text-base-200'>
						Tom Jin
					</h1>
					<div className='w-fit rounded-full bg-gradient-to-r from-primary-400 to-accent-400 p-px'>
						<div className='rounded-full bg-base-950/80 text-sm'>
							<span className='flex items-center gap-0.5 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text px-2 py-px text-sm font-medium text-transparent'>
								<RiHammerFill className='fill-primary-400' />
								{t('homePage.subTitle')}
							</span>
						</div>
					</div>
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
			<div className='mt-16 animate-in animation-delay-4'>
				<div className='flex items-center justify-between'>
					<h2 className='flex items-center gap-1 text-lg font-medium  tracking-tight text-base-200'>
						<RiGitRepositoryFill />
						{t('common.projects')}
					</h2>
					<Link
						className='opacity-hover flex items-center gap-1 text-sm '
						href='/projects'
					>
						{t('common.viewMore')}
						<RiArrowRightFill />
					</Link>
				</div>
				<div className='mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2'>
					{projects.map(project => <ProjectCard key={project.slug} project={project} />)}
				</div>
			</div>
		</>
	);
}

export default HomePage;
