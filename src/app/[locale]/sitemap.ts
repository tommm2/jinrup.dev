import { siteConfig } from '@/config/site';

export default async function sitemap() {
	const routes = ['', 'about', 'blog', 'projects']
		.map((route) => ({
			url: `${siteConfig.siteUrl}/en/${route}`,
			lastModified: new Date().toISOString().split('T')[0],
		}));

	return [
		...routes,
	];
}
