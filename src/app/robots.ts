import { MetadataRoute } from 'next';

function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/404', '/500', '/api/*'],
		},
		sitemap: 'https://tomjin-dev.vercel.app/sitemap.xml',
		host: 'https://tomjin-dev.vercel.app',
	};
}

export default robots;
