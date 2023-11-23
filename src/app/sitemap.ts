import {
	allPosts,
	allProjects,
} from 'contentlayer/generated';

import { siteConfig } from '@/config/site';

export default async function sitemap() {
	const posts = allPosts.map((post) => ({
		url: `${siteConfig.siteUrl}/blog/${post.slug}`,
		lastModified: post.publishedAt.split('T')[0],
	}));

	const projects = allProjects.map((project) => ({
		url: `${siteConfig.siteUrl}/projects/${project.slug}`,
	}));

	const routes = ['', 'about', 'blog', 'projects']
		.map((route) => ({
			url: `${siteConfig.siteUrl}/${route}`,
			lastModified: new Date().toISOString().split('T')[0],
		}));

	return [
		...posts,
		...projects,
		...routes,
	];
}
