import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { allProjects } from 'contentlayer/generated';

import ProjectCard from '@/components/project-card';
import Link from '@/components/link';
import GradientText from '@/components/gradient-text';
import { siteConfig } from '@/config/site';
import { getUrlWithLocale } from '@/lib/navigation';

export async function generateMetadata({
	params,
}: { params: { locale: Locale }}): Promise<Metadata> {
	const t = await getTranslations('projectsPage');
	const url = getUrlWithLocale(params.locale, 'projects');

	return {
		title: 'Projects',
		description: t('description'),
		alternates: {
			canonical: url,
		},
	};
}

const ProjectsPage = () => {
	const t = useTranslations('projectsPage');
	const locale = useLocale();
	const projects = allProjects.filter((item) => item.language === locale);

	return (
		<>
			<GradientText
				className='animate-in from-primary-500 to-accent-500 text-3xl font-bold'
				as='h1'
			>
				Projects
			</GradientText>
			<p
				className='mt-5 animate-in'
				style={{ '--index': 1 } as React.CSSProperties}
			>
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
			<div
				className='mt-16 grid animate-in grid-cols-1 gap-6 sm:grid-cols-2'
				style={{ '--index': 2 } as React.CSSProperties}
			>
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
