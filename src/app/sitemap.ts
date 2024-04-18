import { siteConfig } from '@/config/site';

const sitemap = async () => {
	const routes = ['', 'about', 'blog', 'projects']
		.map((route) => ({
			url: `${siteConfig.siteUrl}/${route}`,
			lastModified: new Date().toISOString().split('T')[0],
		}));

	return [
		...routes,
	];
};

export default sitemap;
