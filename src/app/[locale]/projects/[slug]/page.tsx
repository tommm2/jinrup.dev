import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { RiArrowLeftLine } from 'react-icons/ri';
import { allProjects } from 'contentlayer/generated';

import MDXContent from '@/components/mdx-content';
import Link from '@/components/link';
import PageWrapper from '@/components/page-wrapper';

export async function generateStaticParams() {
	return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string }
}): Promise<Metadata | undefined> {
	const project = allProjects.find((project) => project.slug === params.slug);

	if (!project) {
		return;
	}

	const { title, description, image, slug } = project;

	return {
		title,
		description,
		openGraph: {
			type: 'article',
			title,
			description,
			url: `https://tomjin.vercel.app/projects/${slug}`,
			images: image,
		},
	};
}

interface ProjectsLayoutProps {
	params: {
		slug: string;
	};
}

const ProjectsLayout = ({ params }: ProjectsLayoutProps) => {
	const locale = useLocale();
	const project = allProjects.find((project) => project.slug === params.slug && project.language === locale);

	if (!project) {
		return;
	}

	return (
		<PageWrapper>
			<Link
				className='-ml-1.5 mb-4 inline-flex items-center gap-1 p-1.5 text-sm transition-colors duration-300 hover:text-base-100'
				isBlock
				href='/projects'
			>
				<RiArrowLeftLine />
				<span>Back to projects</span>
			</Link>
			<h1 className='mb-8'>{project.title}</h1>
			<MDXContent code={project.body.code} />
		</PageWrapper>
	);
};

export default ProjectsLayout;
