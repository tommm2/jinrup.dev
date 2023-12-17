import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import ProjectCard from '@/components/project-card';
import { getLocalizedUrl } from '@/utils/url';
import { allProjects } from 'contentlayer/generated';

export async function generateMetadata({
	params,
}: { params: { locale: Locale }}): Promise<Metadata> {
	const t = await getTranslations();
	const url = getLocalizedUrl({
		locale: params.locale,
		pathname: 'projects',
	});

	return {
		title: t('common.projects'),
		description: t('projectsPage.description'),
		alternates: {
			canonical: url,
		},
	};
}

function ProjectsPage() {
	const t = useTranslations();
	const locale = useLocale();
	const projects = allProjects.filter((project) => project.language === locale);

	return (
		<>
			<h1 className='animate-in text-2xl font-bold tracking-tight'>
				{t('common.projects')}
			</h1>
			<p className='mt-1 animate-in text-base-300/80 animation-delay-1'>
				{t('projectsPage.description')}
			</p>
			<div className='mt-4 grid animate-in grid-cols-1 gap-4 animation-delay-2 sm:grid-cols-2'>
				{projects.map(project => (
					<ProjectCard
						key={project.slug}
						project={project}
					/>
				))}
			</div>
		</>
	);
}

export default ProjectsPage;
