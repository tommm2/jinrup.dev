import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';
import { allProjects } from 'contentlayer/generated';

import ProjectCard from '@/components/project-card';
import Link from '@/components/link';
import PageWrapper from '@/components/page-wrapper';
import GradientText from '@/components/gradient-text';
import { siteConfig } from '@/config/site';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
	const t = await getTranslator(params.locale, 'projectsPage');

	return {
		title: 'Projects',
		description: t('description'),
	};
}

const ProjectsPage = () => {
	const t = useTranslations('projectsPage');
	const locale = useLocale();
	const projects = allProjects.filter(item => item.language === locale);

	return (
		<PageWrapper>
			<GradientText
				className='from-primary-500 to-secondary-500 text-3xl font-bold'
				as='h1'
			>
				Projects
			</GradientText>
			<p>
				{t.rich('titleSection', {
					link: (chunks) => (
						<Link
							className='mx-1 font-medium text-primary-500 transition-colors duration-300 hover:text-primary-500/60'
							showAnchorIcon
							aria-label='github'
							title='github'
							href={siteConfig.links.github}
						>
							{chunks}
						</Link>
					),
				})}
			</p>
			<div className='mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2'>
				{projects.map((project) => (
					<ProjectCard
						key={project.slug}
						project={project}
					/>
				))}
			</div>
		</PageWrapper>
	);
};

export default ProjectsPage;
