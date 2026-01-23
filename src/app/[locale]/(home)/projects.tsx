import { useLocale, useTranslations } from 'next-intl';
import { ChevronRight } from 'lucide-react';

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
		<section className='animate-fade-in animation-delay-3'>
			<div className='flex items-center justify-between'>
				<h2 className='text-xl font-bold tracking-tight'>
					{t('projects')}
				</h2>
				<Link
					variant='block'
					href='/projects'
				>
					{t('viewMore')}
					<ChevronRight className='size-4' />
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
