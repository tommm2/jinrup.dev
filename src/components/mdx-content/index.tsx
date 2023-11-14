'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

import MDXComponents from '@/components/mdx-components';

type MDXContentProps = {
	code: string;
}

const MDXContent = ({ code }: MDXContentProps) => {
	const Component = useMDXComponent(code);

	return (
		<div className='prose mt-5'>
			<Component components={MDXComponents} />
		</div>
	);
};

export default MDXContent;
