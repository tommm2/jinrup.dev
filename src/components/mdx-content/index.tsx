'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

import MDXComponents from '@/components/mdx-components';

interface MDXContentProps {
	code: string
}

const MDXContent = ({ code }: MDXContentProps) => {
	const Component = useMDXComponent(code);

	return (
		<div className='prose'>
			<Component components={MDXComponents} />
		</div>
	);
};


export default MDXContent;
