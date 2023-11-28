import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import Link from '@/components/link';
import GradientText from '@/components/gradient-text';
import ProjectList from '@/components/project-list';
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

function ProjectsPage() {
	const t = useTranslations('projectsPage');

	return (
		<>
			<GradientText
				className='animate-in text-3xl font-bold tracking-tight'
				as='h1'
			>
				Projects
			</GradientText>
			<p className='mt-1 animate-in text-base-300/80 animation-delay-1'>
				{t.rich('subTitle', {
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
			<ProjectList />
		</>
	);
}

export default ProjectsPage;
