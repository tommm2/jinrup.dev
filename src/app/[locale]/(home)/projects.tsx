import { useLocale, useTranslations } from 'next-intl';
import { RiArrowRightSLine } from 'react-icons/ri';

import GradientText from '@/components/ui/gradient-text';
import ProjectCard from '@/components/project-card';
import Link from '@/components/ui/link';
import { allProjects } from '@/content';

const Projects = () => {
	const t = useTranslations('common');
	const locale = useLocale() as Locale;
	const projects = allProjects
		.filter((project) => project.language === locale)
		.splice(0, 2);

	return (
		<section className='animate-fade-in animation-delay-4'>
			<div className='flex items-center justify-between'>
				<GradientText
					as='h2'
					className='text-xl font-bold tracking-tight'
				>
					{t('projects')}
				</GradientText>
				<Link
					variant='block'
					href='/projects'
				>
					{t('viewMore')}
					<RiArrowRightSLine />
				</Link>
			</div>
			<div className='mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2'>
				{projects.map((project) => (
					<ProjectCard
						key={project.slug}
						project={project}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
