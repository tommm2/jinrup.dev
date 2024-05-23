import { NextResponse } from 'next/server';
import RSS from 'rss';

import { allPosts } from '@/content';
import { siteConfig } from '@/config/site';
import { defaultLocale } from '@/lib/navigation';

// Supports 'zh-TW' language only
export const GET = () => {
	const feedOptions = {
		title: 'Tom Jin',
		description: 'A developer website by Tom Jin.',
		site_url: `${siteConfig.siteUrl}/`,
		feed_url: `${siteConfig.siteUrl}/feed.xml`,
		language: defaultLocale,
		image_url: `${siteConfig.siteUrl}/opengraph-image.jpg`,
	};

	const feed = new RSS(feedOptions);

	allPosts
		.filter((post) => post.language === defaultLocale)
		.map(post => {
			feed.item({
				title: post.title,
				description: post.description,
				url: `${siteConfig.siteUrl}${post.permalink}`,
				date: post.publishedAt,
			});
		});

	return new NextResponse(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
};
