import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

import { convertToSlug } from '@/lib/utils';
import { mdxConfigs } from '@/data';

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

export const Page = defineDocumentType(() => ({
	name: 'Page',
	filePathPattern: 'pages/**/*.mdx',
	contentType: 'mdx',
	computedFields,
}));

export default makeSource({
	contentDirPath: 'src/content',
	documentTypes: [Post, Project, Page],
	mdx: mdxConfigs,
});
