import { allPosts, allProjects } from 'contentlayer/generated';

const URL = 'https://tomjin.vercel.app';

export default async function sitemap() {
	const posts = allPosts.map((post) => ({
		url: `${URL}/blog/${post.slug}`,
		lastModified: post.publishedAt.split('T')[0],
	}));

	const projects = allProjects.map((project) => ({
		url: `${URL}/projects/${project.slug}`,
	}));

	const routes = ['', '/about', '/blog', '/projects'].map((route) => ({
		url: `${URL}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...posts, ...projects, ...routes];
}
