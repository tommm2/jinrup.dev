import { RiArrowLeftLine } from 'react-icons/ri';
import { allProjects } from 'contentlayer/generated';

import MDXContent from '@/components/mdx-content';
import Link from '@/components/link';
import PageWrapper from '@/components/page-wrapper';

export async function generateStaticParams() {
	return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const project = allProjects.find((project) => project.slug === params.slug);

	if (!project) {
		return;
	}

	const {
		title,
		summary: description,
		image,
		slug,
	} = project;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			url: `https://tomjin.vercel.app/projects/${slug}`,
			image,
		},
	};
}

interface ProjectsLayoutProps {
	params: {
		slug: string
	}
}

const ProjectsLayout = ({ params }: ProjectsLayoutProps) => {
	const project = allProjects.find((project) => project.slug === params.slug);

	if (!project) {
		return;
	}

	return (
		<PageWrapper>
			<Link className='mb-4 inline-flex items-center gap-2' href='/projects'>
				<RiArrowLeftLine />
				<span>返回專案</span>
			</Link>
			<h1 className='mb-8'>
				{project.title}
			</h1>
			<MDXContent code={project.body.code} />
		</PageWrapper>
	);
};

export default ProjectsLayout;
