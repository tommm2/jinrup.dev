import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { RiArrowLeftLine } from 'react-icons/ri';
import { allProjects } from 'contentlayer/generated';

import MDXContent from '@/components/mdx-content';
import Link from '@/components/link';
import { getItemBySlugAndLocale } from '@/lib/contentlayer';

export async function generateStaticParams() {
	return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string, locale: Locale }
}): Promise<Metadata | undefined> {
	const project = getItemBySlugAndLocale(allProjects, params.slug, params.locale);

	if (!project) {
		return;
	}

	const {
		title,
		description,
		image,
		slug,
	} = project;

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

type ProjectsLayoutProps = {
	params: {
		slug: string;
		locale: Locale;
	};
}

const ProjectsLayout = ({ params }: ProjectsLayoutProps) => {
	const project = getItemBySlugAndLocale(allProjects, params.slug, params.locale);

	if (!project) {
		notFound();
	}

	const {
		title,
		image,
		language,
	} = project;

	return (
		<>
			{language !== params.locale ? '文章不支援目前語系' : null}
			<Link
				className='-ml-2 mb-8 inline-flex items-center gap-1 rounded-xl p-1.5 text-base-300/80 transition-colors duration-300 hover:bg-base-800/60 hover:text-base-300'
				href='/projects'
			>
				<RiArrowLeftLine />
				<span>Back to projects</span>
			</Link>
			<div className='animate-in'>
				<h1 className='my-3 text-3xl font-bold'>{title}</h1>
				<Image
					className='max-h-[22.5rem] w-full rounded-xl object-cover object-center'
					width={800}
					height={600}
					src={image}
					alt={title}
					priority
				/>
				<div className='prose mt-5'>
					<MDXContent code={project.body.code} />
				</div>
			</div>
		</>
	);
};

export default ProjectsLayout;
