import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { visit } from 'unist-util-visit';

function convertToSlug(context: string) {
	return context.replace(/\.mdx$/, '');
}

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
	},
	computedFields,
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

export default makeSource({
	contentDirPath: 'src/content',
	documentTypes: [Post, Project],
	mdx: {
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
	},
});
