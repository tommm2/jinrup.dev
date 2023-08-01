import { allProjects } from 'contentlayer/generated';

import Mdx from '@/components/Mdx';

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

type Props = {
	params: {
		slug: string
	}
}

const ProjectsLayout = ({ params }: Props) => {
	const project = allProjects.find((project) => project.slug === params.slug);

	if (!project) {
		return;
	}

	return (
		<article className='prose'>
			<div>
				<h1>{project.title}</h1>
			</div>
			<Mdx code={project.body.code}  />
		</article>
	);
};

export default ProjectsLayout;
