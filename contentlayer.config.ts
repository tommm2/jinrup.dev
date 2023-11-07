import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { visit } from 'unist-util-visit';

import imageMetadata, { getBlurData } from './src/lib/image-metadata';

const computedFields: ComputedFields = {
	slug: {
		type: 'string',
		resolve: (doc) => doc._raw.sourceFileDir.split('/').pop(),
	},
};

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: 'blog/**/*.mdx',
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		description: { type: 'string', required: true },
		publishedAt: { type: 'date', required: true },
		language: { type: 'string', required: true },
		imageSrc: { type: 'string', required: true },
		tags: { type: 'list', of: { type: 'string' } },
	},
	computedFields: {
		...computedFields,
		year: {
			type: 'number',
			resolve: (doc) => {
				const date = new Date(doc.publishedAt);

				return date.getFullYear();
			},
		},
		imageMeta: {
			type: 'json',
			resolve: async (doc) => {
				return getBlurData(doc.imageSrc);
			},
		},
	},
}));

export const Project = defineDocumentType(() => ({
	name: 'Project',
	filePathPattern: 'projects/**/*.mdx',
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		description: { type: 'string', required: true },
		image: { type: 'string', required: true },
		language: { type: 'string', required: true },
		tags: { type: 'list', of: { type: 'string' } },
	},
	computedFields,
}));

export const Page = defineDocumentType(() => ({
	name: 'Page',
	filePathPattern: 'pages/**/*.mdx',
	contentType: 'mdx',
	fields: {
		language: { type: 'string', required: true },
	},
	computedFields,
}));

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Post, Project, Page],
	mdx: {
		esbuildOptions: (opts) => {
			opts.tsconfig = `${process.env.PWD}/tsconfig.mdx.json`;

			return opts;
		},
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			imageMetadata,
			() => (tree) => {
				visit(tree, (node) => {
				  if (node?.type === 'element' && node?.tagName === 'pre') {
						const [codeEl] = node.children;

						if (codeEl.tagName !== 'code') return;

						node.raw = codeEl.children?.[0].value;
				  }
				});
			},
			[
				rehypePrettyCode,
				{
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
					onVisitHighlightedWord(node: any) {
						node.properties.className = ['word--highlighted'];
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
	},
});
