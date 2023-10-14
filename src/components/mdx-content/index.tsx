'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

import MDXComponents from '../mdx-components';

interface MDXContentProps {
	code: string
}

const MDXContent = ({ code }: MDXContentProps) => {
	const Component = useMDXComponent(code);

	return (
		<article className='prose'>
			<Component components={MDXComponents} />
		</article>
	);
};

export default MDXContent;