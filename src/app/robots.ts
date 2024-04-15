import { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

const robots = (): MetadataRoute.Robots => {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/404', '/500', '/api/*'],
		},
		sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
		host: `${siteConfig.siteUrl}`,
	};
};

export default robots;
