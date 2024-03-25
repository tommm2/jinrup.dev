import rehypePrettyCode, { type Options } from 'rehype-pretty-code';

export const prettyCode: [typeof rehypePrettyCode, Options] = [
	rehypePrettyCode,
	{
		keepBackground: false,
		theme: 'github-dark',
	},
];
