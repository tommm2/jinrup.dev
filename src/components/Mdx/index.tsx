'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXComponents } from 'mdx/types';

import Heading from '../Heading';
import CustomImage from './CustomImage';
import CustomLink from './CustomLink';
import CustomPre from './CustomPre';

const codePrefix = `
if (typeof process === 'undefined') {
globalThis.process = { env: {} }
}
`;

const components: MDXComponents = {
	Image: CustomImage,
	Heading,
	a: CustomLink,
	pre: CustomPre,
	input: (props) => {
		return <input aria-label='checkbox' {...props} />;
	},
};

interface MdxProps {
	code: string
}

const Mdx = ({ code }: MdxProps) => {
	const MDXContent = useMDXComponent(codePrefix + code);

	return (
		<MDXContent components={{ ...components }} />
	);
};

export default Mdx;
