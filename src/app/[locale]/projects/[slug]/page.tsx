import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { RiArrowLeftLine, RiCodeSSlashLine, RiLinksLine } from 'react-icons/ri';

import GradientText from '@/components/ui/gradient-text';
import MDXContent from '@/components/mdx';
import Link from '@/components/ui/link';
import { allProjects } from '@/content';
import { getContentWithFallback } from '@/utils/content';
import { getLocalizedUrl } from '@/utils/url';

export const generateStaticParams = async () => {
	return allProjects.map(({ slug }) => ({ slug }));
};

export const generateMetadata = async ({
	params,
}: {
	params: { locale: Locale; slug: string };
}): Promise<Metadata | undefined> => {
	const post = getContentWithFallback({
		contentItems: allProjects,
		slug: params.slug,
		locale: params.locale,
	});

	if (!post) {
		return;
	}

	const { title, description, slug } = post;

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
};

type ProjectLayoutProps = {
	params: {
		slug: string;
		locale: Locale;
	};
};

const ProjectLayout = ({ params }: ProjectLayoutProps) => {
	const t = useTranslations('common');
	const project = getContentWithFallback({
		contentItems: allProjects,
		slug: params.slug,
		locale: params.locale,
	});

	if (!project) {
		notFound();
	}

	const { title, imageUrl, demoUrl, repoUrl } = project;

	return (
		<>
			<Link
				variant='block'
				className='animate-fade-in gap-1'
				href='/projects'
			>
				<RiArrowLeftLine />
				<span>{t('backToProjects')}</span>
			</Link>
			<div className='mt-8 animate-fade-in space-y-3 animation-delay-1'>
				<GradientText
					as='h1'
					className='text-2xl font-bold'
				>
					{title}
				</GradientText>
				<div className='flex items-center gap-1 text-sm font-medium'>
					<Link
						className='group flex items-center gap-1'
						href={demoUrl}
					>
						<RiLinksLine className='text-foreground/60 transition-colors duration-300 group-hover:text-foreground' />
						Live Demo
					</Link>
					．
					<Link
						className='group flex items-center gap-1'
						href={repoUrl}
					>
						<RiCodeSSlashLine className='text-foreground/60 transition-colors duration-300 group-hover:text-foreground' />
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
			<div className='prose mt-5 animate-fade-in animation-delay-2'>
				<MDXContent code={project.content} />
			</div>
		</>
	);
};

export default ProjectLayout;
