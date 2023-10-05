import { RiArrowLeftLine } from 'react-icons/ri';
import { allProjects } from 'contentlayer/generated';

import Mdx from '@/components/Mdx';
import Heading from '@/components/Heading';
import CustomLink from '@/components/Mdx/CustomLink';

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
		<article>
			<CustomLink
				href='/projects'
				className='mb-4 inline-flex items-center gap-2'
			>
				<RiArrowLeftLine />
				<span>返回專案</span>
			</CustomLink>
			<Heading
				className='mb-8'
				as='h1'
			>
				{project.title}
			</Heading>
			<div className='prose'>
				<Mdx code={project.body.code} />
			</div>
		</article>
	);
};

export default ProjectsLayout;
