import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import ProjectCard from '@/components/project-card';
import { allProjects } from '@/content';
import { getLocalizedUrl } from '@/utils/url';

export const generateMetadata = async ({
	params,
}: {
	params: { locale: Locale };
}): Promise<Metadata> => {
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
};

const ProjectsPage = () => {
	const t = useTranslations();
	const locale = useLocale();
	const projects = allProjects.filter((project) => project.language === locale);

	return (
		<>
			<h1 className='text-2xl font-bold tracking-tight animate-fade-in'>
				{t('common.projects')}
			</h1>
			<p className='mt-1 text-muted-foreground animate-fade-in animation-delay-1'>
				{t('projectsPage.description')}
			</p>
			<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 animate-fade-in animation-delay-2'>
				{projects.map((project) => (
					<ProjectCard
						key={project.slug}
						project={project}
					/>
				))}
			</div>
		</>
	);
};

export default ProjectsPage;
