import { MetadataRoute } from 'next';

function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/404', '/500', '/api/*'],
		},
		sitemap: 'https://tomjin.vercel.app/sitemap.xml',
		host: 'https://tomjin.vercel.app',
	};
}

export default robots;
