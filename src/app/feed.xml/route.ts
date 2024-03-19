import { NextResponse } from 'next/server';
import { allPosts } from '@/.velite';
import RSS from 'rss';

import { defaultLocale } from '@/lib/navigation';
import { getLocalizedUrl } from '@/utils/url';
import { siteConfig } from '@/config/site';

export function GET() {
	const feedOptions = {
		title: 'Tom Jin',
		description: 'A developer website by Tom Jin.',
		site_url: `${siteConfig.siteUrl}`,
		feed_url: `${siteConfig.siteUrl}/feed.xml`,
		language: 'zh-TW',
		image_url: `${siteConfig.siteUrl}/opengraph-image.jpg`,
	};

	const feed = new RSS(feedOptions);

	allPosts
		.filter((post) => post.language === defaultLocale)
		.map(post => {
			feed.item({
				title: post.title,
				description: post.description,
				url: getLocalizedUrl({
					locale: post.language as Locale,
					pathname: 'blog',
					slug: post.slug,
				}),
				date: post.publishedAt,
			});
		});

	return new NextResponse(feed.xml({ indent: true }), {
		headers: {
		  'Content-Type': 'application/xml',
		},
	});
}
