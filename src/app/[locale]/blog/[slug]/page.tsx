import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { RiArrowLeftLine } from 'react-icons/ri';
import { allPosts } from '@/.velite';

import Comment from '@/components/comment';
import Callout from '@/components/mdx-components/callout';
import ClientIntlProvider from '@/components/client-intl-provider';
import Link from '@/components/link';
import MDXContent from '@/components/mdx-content';
import ViewCounter from '@/components/view-counter';
import GradientText from '@/components/gradient-text';
import { defaultLocale } from '@/lib/navigation';
import { getContentBySlugAndLocale } from '@/utils/content';
import { getLocalizedUrl } from '@/utils/url';
import { formatDate, getDistanceToNow } from '@/utils/date';

export async function generateStaticParams() {
	return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { locale: Locale; slug: string };
}): Promise<Metadata | undefined> {
	const post = getContentBySlugAndLocale({
		contentItems: allPosts,
		slug: params.slug,
		locale: params.locale,
	});

	if (!post) {
		return;
	}

	const {
		title,
		description,
		publishedAt,
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
			publishedTime: publishedAt,
			url,
		},
		alternates: {
			canonical: url,
		},
	};
}

type BlogPostLayoutProps = {
	params: {
		slug: string;
		locale: Locale;
	};
};

function BlogPostLayout({ params }: BlogPostLayoutProps) {
	const t = useTranslations('common');
	const locale = useLocale() as Locale;
	const post = getContentBySlugAndLocale({
		contentItems: allPosts,
		slug: params.slug,
		locale: params.locale,
	});

	if (!post) {
		notFound();
	}

	const {
		title,
		language,
		publishedAt,
		slug,
	} = post;

	const formatString = locale === defaultLocale ? 'PPP' : 'LLLL dd, yyyy';
	const date = formatDate({
		date: publishedAt,
		formatString,
		locale,
	});
	const distanceToNow = getDistanceToNow(publishedAt, locale);

	return (
		<>
			<Link
				className='animate-in'
				isBlock
				href='/blog'
			>
				<RiArrowLeftLine />
				<span>{t('backToBlog')}</span>
			</Link>
			<div className='mt-8 animate-in animation-delay-1'>
				<GradientText
					as='h1'
					className='text-2xl font-bold'
				>
					{title}
				</GradientText>
				<div className='mt-3 flex justify-between text-sm text-base-300/60'>
					<time dateTime={publishedAt}>{`${date} (${distanceToNow})`}</time>
					<ClientIntlProvider messageKey='common'>
						<ViewCounter
							slug={slug}
							shouldIncrement
						/>
					</ClientIntlProvider>
				</div>
				{language !== params.locale && (
					<Callout type='warning'>{t('noSupport')}</Callout>
				)}
			</div>
			<article className='prose my-8 animate-in animation-delay-2'>
				<MDXContent code={post.content} />
			</article>
			<Comment locale={params.locale} />
		</>
	);
}

export default BlogPostLayout;
