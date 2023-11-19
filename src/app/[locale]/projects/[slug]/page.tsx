import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { RiArrowLeftLine } from 'react-icons/ri';
import { allProjects } from 'contentlayer/generated';

import MDXContent from '@/components/mdx-content';
import Link from '@/components/link';
import GradientText from '@/components/gradient-text';
import { getItemBySlugAndLocale } from '@/lib/contentlayer';
import { getUrlWithLocale } from '@/lib/navigation';

export async function generateStaticParams() {
	return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string; locale: Locale };
}): Promise<Metadata | undefined> {
	const project = getItemBySlugAndLocale(
		allProjects,
		params.slug,
		params.locale,
	);

	if (!project) {
		return;
	}

	const { title, description, image, slug } = project;

	const url = getUrlWithLocale(params.locale, 'projects', slug);

	return {
		title,
		description,
		openGraph: {
			type: 'article',
			title,
			description,
			url,
			images: image,
		},
		alternates: {
			canonical: url,
		},
	};
}

type ProjectsLayoutProps = {
	params: {
		slug: string;
		locale: Locale;
	};
};

function ProjectLayout ({ params }: ProjectsLayoutProps) {
	const project = getItemBySlugAndLocale(
		allProjects,
		params.slug,
		params.locale,
	);

	if (!project) {
		notFound();
	}

	const { title, image } = project;

	return (
		<>
			<Link
				className='-ml-2 mb-8 inline-flex items-center gap-1 rounded-md p-1.5 text-base-300/80 transition-colors duration-300 hover:bg-base-800/60 hover:text-base-300'
				href='/projects'
			>
				<RiArrowLeftLine />
				<span>Back to projects</span>
			</Link>
			<div className='animate-in'>
				<GradientText
					className='my-3 text-3xl font-bold'
					as='h1'
				>
					{title}
				</GradientText>
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
}

export default ProjectLayout;
