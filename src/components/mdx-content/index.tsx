'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

import MDXComponents from '@/components/mdx-components';

type MDXContentProps = {
	code: string;
}

const MDXContent = ({ code }: MDXContentProps) => {
	const Component = useMDXComponent(code);

	return (
		<Component components={MDXComponents} />
	);
};

export default MDXContent;
