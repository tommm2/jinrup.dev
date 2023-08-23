import { allProjects } from 'contentlayer/generated';

import Mdx from '@/components/Mdx';
import { RiArrowLeftLine } from 'react-icons/ri';
import Link from 'next/link';
import Heading from '@/components/Heading';

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
			url: `https://tomjin.dev/projects/${slug}`,
			// images: [
			// 	{
			// 		url: ogImage,
			// 	},
			// ],
		},
	};
}

interface ProjectsLayoutProps {
	params: {
		slug: string
	}
}

// repo-id: R_kgDOKCNxfg
// category-id: DIC_kwDOKCNxfs4CYnqm

const ProjectsLayout = ({ params }: ProjectsLayoutProps) => {
	const project = allProjects.find((project) => project.slug === params.slug);

	if (!project) {
		return;
	}

	return (
		<article>
			<Link
				href='/projects'
				className='mb-4 flex items-center gap-2'
			>
				<RiArrowLeftLine />
				<span>返回專案頁面</span>
			</Link>
			<Heading
				as='h1'
				text={project.title}
				hasUnderline={false}
			/>
			<div className='mb-8 flex items-center'>
			</div>
			<div className='prose'>
				<Mdx code={project.body.code} />
			</div>
		</article>
	);
};

export default ProjectsLayout;
