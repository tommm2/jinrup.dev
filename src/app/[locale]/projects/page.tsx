import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import GradientText from '@/components/ui/gradient-text';
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
			<GradientText
				as='h1'
				className='animate-fade-in text-2xl font-bold tracking-tight'
			>
				{t('common.projects')}
			</GradientText>
			<p className='mt-1 animate-fade-in text-foreground/80 animation-delay-1'>
				{t('projectsPage.description')}
			</p>
			<div className='mt-4 grid animate-fade-in grid-cols-1 gap-4 animation-delay-2 sm:grid-cols-2'>
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
