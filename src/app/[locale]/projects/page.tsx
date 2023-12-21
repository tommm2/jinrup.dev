import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { allProjects } from 'contentlayer/generated';

import ProjectCard from '@/components/project-card';
import GradientText from '@/components/gradient-text';
import { getLocalizedUrl } from '@/utils/url';

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
		<div className='animate-in animation-delay-1'>
			<GradientText
				as='h1'
				className='text-2xl font-bold tracking-tight'
			>
				{t('common.projects')}
			</GradientText>
			<p className='mt-1 text-base-300/80'>
				{t('projectsPage.description')}
			</p>
			<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
				{projects.map(project => (
					<ProjectCard
						key={project.slug}
						project={project}
					/>
				))}
			</div>
		</div>
	);
}

export default ProjectsPage;
