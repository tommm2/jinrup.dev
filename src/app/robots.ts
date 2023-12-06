import { MetadataRoute } from 'next';

function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/404', '/500', '/api/*'],
		},
		sitemap: 'https://jinrup.vercel.app/sitemap.xml',
		host: 'https://jinrup.vercel.app',
	};
}

export default robots;
