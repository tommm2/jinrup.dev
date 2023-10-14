import { MDXComponents as MDXComponentsProps } from 'mdx/types';

import Link from '@/components/link';
import LinkedHeading from './linked-heading';
import Image from './image';
import Pre from './pre';

const MDXComponents: MDXComponentsProps = {
	Image,
	h1: (props) => <LinkedHeading as='h1' linked={false} {...props} />,
	h2: (props) => <LinkedHeading as='h2' {...props} />,
	h3: (props) => <LinkedHeading as='h3' {...props} />,
	h4: (props) => <LinkedHeading as='h4' {...props} />,
	a: (props) => <Link showAnchorIcon {...props} />,
	input: (props) => <input aria-label='checkbox' {...props} />,
	// blockquote: (props) => (
	// 	<blockquote
	// 		className='border-primary-500 bg-base-800/40 p-3 [&>p]:m-0'
	// 		{...props}
	// 	/>
	// ),
	pre: Pre,
};

export default MDXComponents;
