import { MDXOptions } from 'contentlayer/core';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { visit } from 'unist-util-visit';

const mdxConfigs: MDXOptions = {
	esbuildOptions: (opts) => {
		opts.tsconfig = `${process.env.PWD}/tsconfig.mdx.json`;

		return opts;
	},
	remarkPlugins: [remarkGfm],
	rehypePlugins: [
		() => (tree) => {
			visit(tree, (node) => {
			  if (node?.type === 'element' && node?.tagName === 'pre') {
					const [codeEl] = node.children;

					if (codeEl.tagName !== 'code') return;

					node.raw = codeEl.children?.[0].value;
			  }
			});
		},
		rehypeSlug,
		[
			rehypePrettyCode,
			{
				theme: 'one-dark-pro',
				onVisitLine(node: any) {
					// Prevent lines from collapsing in `display: grid` mode, and allow empty
					if (node.children.length === 0) {
						node.children = [{ type: 'text', value: ' ' }];
					}
				},
				onVisitHighlightedLine(node: any) {
					node.properties.className.push('line--highlighted');
				},
				onVisitHighlightedWord(node: any) {
					node.properties.className = ['word--highlighted'];
				},
			},
		],
		[
			rehypeAutolinkHeadings,
			{
				properties: {
					className: ['anchor'],
					ariaLabel: 'Title anchor',
				},
			},
		],
		// reference: https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype
		() => (tree) => {
			visit(tree, (node) => {
				if (node?.type === 'element' && node?.tagName === 'div') {
					if (!('data-rehype-pretty-code-fragment' in node.properties)) {
						return;
					}

					for (const child of node.children) {
						if (child.tagName === 'pre') {
							child.properties['raw'] = node.raw;
						}
					}
				}
			});
		},
	],
};

export default mdxConfigs;
