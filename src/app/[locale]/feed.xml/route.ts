import { NextResponse } from 'next/server';
import { allPosts } from '@/.velite';
import RSS from 'rss';

import { siteConfig } from '@/config/site';

export function GET() {
	const feedOptions = {
		title: 'Tom Jin',
		description: 'A developer website by Tom Jin.',
		site_url: `${siteConfig.siteUrl}/en`,
		feed_url: `${siteConfig.siteUrl}/en/feed.xml`,
		language: 'en',
		image_url: `${siteConfig.siteUrl}/opengraph-image.jpg`,
	};

	const feed = new RSS(feedOptions);

	allPosts
		.filter((post) => post.language === 'en')
		.map(post => {
			feed.item({
				title: post.title,
				description: post.description,
				url: `${siteConfig.siteUrl}/en${post.permalink}`,
				date: post.publishedAt,
			});
		});

	return new NextResponse(feed.xml({ indent: true }), {
		headers: {
		  'Content-Type': 'application/xml',
		},
	});
}
