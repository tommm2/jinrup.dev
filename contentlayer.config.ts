import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { visit } from 'unist-util-visit';

import { convertToSlug } from './src/lib/utils';

const computedFields: ComputedFields = {
	slug: {
		type: 'string',
		resolve: (doc) => convertToSlug(doc._raw.sourceFileName),
	},
	url: {
		type: 'string',
		resolve: (doc) => {
			const slug = convertToSlug(doc._raw.sourceFileName);
			const parentPath = doc._raw.sourceFileDir;

			return `/${parentPath}/${slug}`;
		},
	},
};

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: 'blog/**/*.mdx',
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		publishedAt: { type: 'date', required: true },
		summary: { type: 'string', required: true },
		language: {
			type: 'string',
			default: 'zh-TW',
			required: true,
		},
	},
	computedFields: {
		slug: {
			type: 'string',
			resolve: (doc) => {
				const sourceFileDir = doc._raw.sourceFileDir;
				const slug = sourceFileDir.split('/').pop();

				return slug;
			},
		},
		url: {
			type: 'string',
			resolve: (doc) => {
				const sourceFileDir = doc._raw.sourceFileDir;
				const slug = sourceFileDir.split('/').pop();

				return `/blog/${slug}`;
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
		summary: { type: 'string', required: true },
		image: { type: 'string' , required: true },
	},
	computedFields,
}));

export const Page = defineDocumentType(() => ({
	name: 'Page',
	filePathPattern: 'pages/**/*.mdx',
	contentType: 'mdx',
	fields: {
		language: {
			type: 'string',
			default: 'zh-TW',
			required: true,
		},
	},
	computedFields: {
		slug: {
			type: 'string',
			resolve: (doc) => {
				const sourceFileDir = doc._raw.sourceFileDir;
				const slug = sourceFileDir.split('/').pop();

				return slug;
			},
		},
		url: {
			type: 'string',
			resolve: (doc) => {
				const sourceFileDir = doc._raw.sourceFileDir;
				const slug = sourceFileDir.split('/').pop();

				return `/${slug}`;
			},
		},
	},
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
