'use client';

import * as runtime from 'react/jsx-runtime';

import MdxComponents from './mdx-components';

const useMDXComponent = (code: string) => {
	const fn = new Function(code);

	return fn({ ...runtime }).default;
};

type MdxContentProps = {
	code: string;
	components?: Record<string, React.ComponentType>;
};

export default function MDXContent({ code, components }: MdxContentProps) {
	const Component = useMDXComponent(code);

	return <Component components={{ ...MdxComponents, ...components }} />;
}
