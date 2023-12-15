import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { RiArrowLeftLine } from 'react-icons/ri';
import { allProjects } from 'contentlayer/generated';

import Comment from '@/components/comment';
import Callout from '@/components/mdx-components/callout';
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
	const post = getContentBySlugAndLocale({
		contentItems: allProjects,
		slug: params.slug,
		locale: params.locale,
	});

	if (!post) {
		notFound();
	}

	const {
		title,
		language,
	} = post;

	return (
		<>
			<Link
				className='-ml-2 inline-flex animate-in items-center gap-1 rounded-md p-1.5 text-base-300/80 transition-colors duration-300 hover:bg-base-800/60 hover:text-base-300'
				href='/projects'
			>
				<RiArrowLeftLine />
				<span>{t('backToProjects')}</span>
			</Link>
			<div className='mt-8 animate-in'>
				<h1 className='text-2xl font-bold'>
					{title}
				</h1>
				{language !== params.locale && (
					<Callout type='warning'>{t('noSupport')}</Callout>
				)}
			</div>
			<div className='prose mt-5 animate-in animation-delay-1'>
				<MDXContent code={post.body.code} />
			</div>
			<Comment locale={params.locale} />
		</>
	);
}

export default ProjectLayout;
