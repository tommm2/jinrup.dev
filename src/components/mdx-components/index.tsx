import NextImage from 'next/image';
import { MDXComponents as MDXComponentsProps } from '@mdx-js/react/lib';

import Link from '@/components/link';
import Callout from './callout';
import LinkedHeading from './linked-heading';

const MDXComponents: MDXComponentsProps = {
	Callout,
	Image: (props) => <NextImage {...props} className='size-auto rounded-lg' priority />,
	h1: (props) => <LinkedHeading as='h1' isLinked={false} {...props} />,
	h2: (props) => <LinkedHeading as='h2' {...props} />,
	h3: (props) => <LinkedHeading as='h3' {...props} />,
	h4: (props) => <LinkedHeading as='h4' {...props} />,
	a: (props: React.HTMLAttributes<HTMLAnchorElement>) => <Link showAnchorIcon {...props} />,
	input: (props) => <input aria-label='todo' {...props} />,
};

export default MDXComponents;
