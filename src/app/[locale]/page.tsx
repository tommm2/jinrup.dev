import { useLocale, useTranslations } from 'next-intl';
import { RiArrowRightSLine } from 'react-icons/ri';
import { allProjects } from 'contentlayer/generated';

import Link from '@/components/link';
import ProjectCard from '@/components/project-card';
import Avatar from '@/components/avatar';
import Contacts from '@/components/contacts';
import GradientText from '@/components/gradient-text';

function HomePage() {
	const t = useTranslations();
	const locale = useLocale();
	const projects = allProjects
		.filter(item => item.language === locale)
		.splice(0, 2);

	return (
		<>
			<Avatar
				title='Tom Jin'
				subTitle={t('homePage.subTitle')}
			/>
			<p className='mt-8 animate-in animation-delay-3'>
				{t('homePage.description')}
			</p>
			<Contacts className='mt-4 animate-in animation-delay-4' />
			<div className='mt-16 animate-in animation-delay-5'>
				<div className='flex items-center justify-between'>
					<GradientText
						as='h2'
						className='text-xl font-bold tracking-tight'
					>
						{t('common.projects')}
					</GradientText>
					<Link
						className='flex h-8 items-center gap-1 rounded-lg bg-base-400/10 p-4 text-sm text-base-300 transition-colors hover:bg-base-400/20'
						href='/projects'
					>
						{t('common.viewMore')}
						<RiArrowRightSLine className='h-4 w-4' />
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
