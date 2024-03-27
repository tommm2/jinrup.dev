import { NextResponse } from 'next/server';
import { allPosts } from '@/.velite';
import RSS from 'rss';

import { siteConfig } from '@/config/site';

type StaticParams = { params: { locale: string }}

export function GET(_: Request, { params }: StaticParams) {
	const feedOptions = {
		title: 'Tom Jin',
		description: 'A developer website by Tom Jin.',
		site_url: `${siteConfig.siteUrl}/${params.locale}`,
		feed_url: `${siteConfig.siteUrl}/${params.locale}/feed.xml`,
		language: params.locale,
		image_url: `${siteConfig.siteUrl}/opengraph-image.jpg`,
	};

	const feed = new RSS(feedOptions);

	allPosts
		.filter((post) => post.language === params.locale)
		.map(post => {
			feed.item({
				title: post.title,
				description: post.description,
				url: `${siteConfig.siteUrl}/${post.language}${post.permalink}`,
				date: post.publishedAt,
			});
		});

	return new NextResponse(feed.xml({ indent: true }), {
		headers: {
		  'Content-Type': 'application/xml',
		},
	});
}
