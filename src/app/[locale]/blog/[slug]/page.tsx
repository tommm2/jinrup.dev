import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { RiArrowLeftLine } from 'react-icons/ri';

import Comment from '@/components/comment';
import GradientText from '@/components/ui/gradient-text';
import MDXContent from '@/components/mdx';
import Callout from '@/components/mdx/callout';
import Link from '@/components/ui/link';
import ViewCounter from '@/components/view-counter';
import { allPosts } from '@/content';
import { defaultLocale } from '@/lib/navigation';
import { getContentWithFallback } from '@/utils/content';
import { formatDate, getDistanceToNow } from '@/utils/date';
import { getLocalizedUrl } from '@/utils/url';

export const generateStaticParams = async () => {
	return allPosts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({
	params,
}: {
	params: { locale: Locale; slug: string };
}): Promise<Metadata | undefined> => {
	const post = getContentWithFallback({
		contentItems: allPosts,
		slug: params.slug,
		locale: params.locale,
	});

	if (!post) {
		return;
	}

	const { title, description, publishedAt, slug } = post;

	const url = getLocalizedUrl({
		locale: params.locale,
		pathname: 'blog',
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
};

type BlogPostLayoutProps = {
	params: {
		slug: string;
		locale: Locale;
	};
};

const BlogPostLayout = ({ params }: BlogPostLayoutProps) => {
	const t = useTranslations('common');
	const locale = useLocale() as Locale;
	const post = getContentWithFallback({
		contentItems: allPosts,
		slug: params.slug,
		locale: params.locale,
	});

	if (!post) {
		notFound();
	}

	const { title, language, publishedAt, slug } = post;

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
				variant='block'
				className='animate-fade-in gap-1'
				href='/blog'
			>
				<RiArrowLeftLine />
				<span>{t('backToBlog')}</span>
			</Link>
			<div className='mt-8 animate-fade-in animation-delay-1'>
				<GradientText
					as='h1'
					className='text-2xl font-bold'
				>
					{title}
				</GradientText>
				<div className='mt-3 flex justify-between text-sm text-foreground/60'>
					<time dateTime={publishedAt}>{`${date} (${distanceToNow})`}</time>
					<ViewCounter
						slug={slug}
						shouldIncrement
					/>
				</div>
				{language !== params.locale && (
					<Callout variant='warning'>{t('noSupport')}</Callout>
				)}
			</div>
			<article className='prose my-8 animate-fade-in animation-delay-2'>
				<MDXContent code={post.content} />
			</article>
			<Comment locale={params.locale} />
		</>
	);
};

export default BlogPostLayout;
