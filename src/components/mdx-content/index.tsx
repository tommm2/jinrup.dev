'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

import MDXComponents from '@/components/mdx-components';

interface MDXContentProps {
	code: string;
	animateDelayIndex?: number;
}

export default function MDXContent({
	code,
	animateDelayIndex = 0,
}: MDXContentProps) {
	const Component = useMDXComponent(code);

	return (
		<div
			className='prose animate-in'
			style={{ '--index': animateDelayIndex } as React.CSSProperties}
		>
			<Component components={MDXComponents} />
		</div>
	);
}
