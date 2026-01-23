import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import MDXContent from '@/components/mdx';
import { allPages } from '@/content';
import { getLocalizedUrl } from '@/utils/url';

export const generateMetadata = async ({
	params,
}: {
	params: { locale: Locale };
}): Promise<Metadata> => {
	const t = await getTranslations();
	const url = getLocalizedUrl({
		locale: params.locale,
		pathname: 'timeline',
	});

	return {
		title: t('common.timeline'),
		description: t('timelinePage.description'),
		alternates: {
			canonical: url,
		},
	};
};

type TimelinePageProps = {
	params: {
		locale: Locale;
	};
};

const TimelinePage = ({ params }: TimelinePageProps) => {
	const t = useTranslations('timelinePage');

	const page =
		allPages.find(
			(p) => p.slug === 'timeline' && p.language === params.locale,
		) ?? allPages.find((p) => p.slug === 'timeline');

	return (
		<div className='mx-auto max-w-2xl'>
			<h1 className='animate-fade-in text-2xl font-bold tracking-tight'>
				{t('title')}
			</h1>
			<p className='animate-fade-in animation-delay-1 mt-2 text-muted-foreground'>
				{t('description')}
			</p>

			<div className='animate-fade-in mt-8 animation-delay-2 relative ml-3 space-y-8 border-l border-border'>
				{page && <MDXContent code={page.content} />}
			</div>
		</div>
	);
};

export default TimelinePage;
