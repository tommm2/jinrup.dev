import { visit } from 'unist-util-visit';
import { defineCollection, defineConfig, s } from 'velite';
import rehypePrettyCode from 'rehype-pretty-code';

const allPosts = defineCollection({
	name: 'Post',
	pattern: 'blog/**/*.mdx',
	schema: s
		.object({
			title: s.string(),
			slug: s.string(),
			description: s.string(),
			publishedAt: s.isodate(),
			language: s.string(),
			content: s.mdx(),
		})
		.transform(data => ({
			...data,
			year: new Date(data.publishedAt).getFullYear(),
			permalink: `/blog/${data.slug}`,
		})),
});

const allProjects = defineCollection({
	name: 'Project',
	pattern: 'projects/**/*.mdx',
	schema: s
		.object({
			title: s.string(),
			slug: s.string(),
			description: s.string(),
			imageUrl: s.string(),
			demoUrl: s.string(),
			repoUrl: s.string(),
			// repoName should be the same as your Github repo name in order to fetch data successfully.
			repoName: s.string(),
			language: s.string(),
			content: s.mdx(),
		})
		.transform(data => ({
			...data,
			permalink: `/projects/${data.slug}`,
		})),
});

const allPages = defineCollection({
	name: 'Page',
	pattern: 'pages/**/*.mdx',
	schema: s
		.object({
			slug: s.string(),
			language: s.string(),
			content: s.mdx(),
		})
		.transform(data => ({
			...data,
			permalink: `/${data.slug}`,
		})),
});

export default defineConfig({
	collections: { allPosts, allProjects, allPages },
	mdx: {
		rehypePlugins: [
			[rehypePrettyCode, {
				keepBackground: false,
				theme: 'github-dark',
				onVisitLine(node: any) {
					// Prevent lines from collapsing in `display: grid` mode, and allow empty
					if (node.children.length === 0) {
						node.children = [{ type: 'text', value: ' ' }];
					}
				},
				onVisitHighlightedLine(node: any) {
					node.properties.className.push('line--highlighted');
				},
			}],
			// () => (tree) => {
			// 	visit(tree, (node) => {
			// 	  if (node?.type === 'element' && node?.tagName === 'pre') {
			// 			const [codeEl] = node.children;

			// 			if (codeEl.tagName !== 'code') return;

			// 			node.raw = codeEl.children?.[0].value;
			// 	  }
			// 	});
			// },
			// () => (tree) => {
			// 	visit(tree, (node) => {
			// 		if (node?.type === 'element' && node?.tagName === 'div') {
			// 			if (!('data-rehype-pretty-code-figure' in node.properties)) {
			// 				return;
			// 			}

			// 			for (const child of node.children) {
			// 				if (child.tagName === 'pre') {
			// 					child.properties['raw'] = node.raw;
			// 				}
			// 			}
			// 		}
			// 	});
			// },
		],
	},
});
