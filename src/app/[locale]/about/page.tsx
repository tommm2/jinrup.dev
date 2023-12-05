import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { allPages } from 'contentlayer/generated';

import MDXContent from '@/components/mdx-content';
import { getUrlWithLocale } from '@/lib/navigation';

export async function generateMetadata({
	params,
}: { params: { locale: Locale }}): Promise<Metadata> {
	const t = await getTranslations();
	const url = getUrlWithLocale(params.locale, 'about');

	return {
		title: t('common.about'),
		description: t('aboutPage.description'),
		alternates: {
			canonical: url,
		},
	};
}

function AboutPage() {
	const t = useTranslations('common');
	const locale = useLocale() as Locale;
	const page = allPages.find((page) => page.slug === 'about' && page.language === locale);

	if (!page) {
		notFound();
	}

	return (
		<>
			<h1 className='animate-in text-2xl font-bold tracking-tight'>
				{t('about')}
			</h1>
			<div className='prose mt-5 animate-in animation-delay-1'>
				<MDXContent code={page.body.code} />
			</div>
		</>
	);
}

export default AboutPage;
