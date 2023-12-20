import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { RiArrowLeftLine, RiCodeSSlashLine, RiLinksLine } from 'react-icons/ri';
import { allProjects } from 'contentlayer/generated';

import Link from '@/components/link';
import MDXContent from '@/components/mdx-content';
import { getLocalizedUrl } from '@/utils/url';
import { getContentBySlugAndLocale } from '@/utils/content';

export async function generateStaticParams() {
	return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
	params,
}: { params: { locale: Locale; slug: string; }}): Promise<Metadata | undefined> {
	const post = getContentBySlugAndLocale({
		contentItems: allProjects,
		slug: params.slug,
		locale: params.locale,
	});

	if (!post) {
		return;
	}

	const {
		title,
		description,
		slug,
	} = post;

	const url = getLocalizedUrl({
		locale: params.locale,
		slug,
	});

	return {
		title,
		description,
		openGraph: {
			type: 'article',
			title,
			description,
			url,
		},
		alternates: {
			canonical: url,
		},
	};
}

type ProjectLayoutProps = {
	params: {
		slug: string;
		locale: Locale;
	};
};

function ProjectLayout({ params }: ProjectLayoutProps) {
	const t = useTranslations('common');
	const project = getContentBySlugAndLocale({
		contentItems: allProjects,
		slug: params.slug,
		locale: params.locale,
	});

	if (!project) {
		notFound();
	}

	const {
		title,
		imageUrl,
		demoUrl,
		repoUrl,
	} = project;

	return (
		<>
			<Link
				className='-ml-2 inline-flex animate-in items-center gap-1 rounded-lg p-1.5 text-base-300/80 transition-colors duration-300 hover:bg-base-800/60 hover:text-base-300'
				href='/projects'
			>
				<RiArrowLeftLine />
				<span>{t('backToProjects')}</span>
			</Link>
			<div className='mt-8 animate-in space-y-2 animation-delay-1'>
				<h1 className='text-2xl font-bold'>{title}</h1>
				<div className='flex items-center gap-2 text-sm font-medium'>
					<Link
						className='group rounded-lg border border-base-800 px-3 py-2 transition-colors duration-300 hover:border-base-700 hover:bg-base-900/70'
						href={demoUrl}
					>
						<RiLinksLine className='mr-2 inline-block text-base-300/60 transition-colors duration-300 group-hover:text-base-300' />
						Live Demo
					</Link>
					<Link
						className='group rounded-lg border border-base-800 px-3 py-2 transition-colors duration-300 hover:border-base-700 hover:bg-base-900/70'
						href={repoUrl}
					>
						<RiCodeSSlashLine className='mr-2 inline-block text-base-300/60 transition-colors duration-300 group-hover:text-base-300' />
						Source Code
					</Link>
				</div>
				<Image
					className='w-full rounded-lg object-cover'
					width={800}
					height={600}
					src={imageUrl}
					alt={title}
				/>
			</div>
			<div className='prose mt-5 animate-in animation-delay-2'>
				<MDXContent code={project.body.code} />
			</div>
		</>
	);
}

export default ProjectLayout;
