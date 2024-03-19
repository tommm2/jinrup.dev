import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { RiArrowLeftLine, RiCodeSSlashLine, RiLinksLine } from 'react-icons/ri';
import { allProjects } from '@/.velite';

import Link from '@/components/link';
import MDXContent from '@/components/mdx-content';
import { getLocalizedUrl } from '@/utils/url';
import { getContentBySlugAndLocale } from '@/utils/content';
import GradientText from '@/components/gradient-text';

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
				className='animate-in'
				isBlock
				href='/projects'
			>
				<RiArrowLeftLine />
				<span>{t('backToProjects')}</span>
			</Link>
			<div className='mt-8 animate-in space-y-3 animation-delay-1'>
				<GradientText as='h1' className='text-2xl font-bold'>{title}</GradientText>
				<div className='flex items-center gap-1 text-sm font-medium'>
					<Link
						className='group flex items-center gap-1'
						href={demoUrl}
					>
						<RiLinksLine className='text-base-200/60 transition-colors duration-300 group-hover:text-base-200' />
						Live Demo
					</Link>
					．
					<Link
						className='group flex items-center gap-1'
						href={repoUrl}
					>
						<RiCodeSSlashLine className='text-base-200/60 transition-colors duration-300 group-hover:text-base-200' />
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
				<MDXContent code={project.content} />
			</div>
		</>
	);
}

export default ProjectLayout;
