import Image, { ImageProps } from 'next/image';
import React, { ComponentPropsWithRef } from 'react';

import Link from '@/components/ui/link';
import Callout from './callout';

function createHeading(level: number) {
	return function Heading({ children }: { children: string }) {
		let slug = children.toLowerCase().replace(/ /g, '-');

		return React.createElement(
			`h${level}`,
			{ id: slug },
			[
				React.createElement('a', {
					href: `#${slug}`,
					key: `link-${slug}`,
					className: 'anchor',
				}),
			],
			children,
		);
	};
}

const MdxComponents = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	a: Link,
	Callout,
	img: ({ alt, ...otherProps }: ImageProps) => (
		<Image
			className='size-auto rounded-lg'
			priority
			alt={alt}
			{...otherProps}
		/>
	),
	input: (props: ComponentPropsWithRef<'input'>) => (
		<input
			aria-label='todo'
			{...props}
		/>
	),
};

export default MdxComponents;
