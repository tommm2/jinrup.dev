import NextImage from 'next/image';
import { MDXComponents as MDXComponentsProps } from '@mdx-js/react/lib';

import Link from '@/components/link';
import Callout from './callout';
import LinkedHeading from './linked-heading';
import Pre from './pre';

const MDXComponents: MDXComponentsProps = {
	Callout,
	Image: (props) => <NextImage {...props} className='size-auto rounded-lg' priority />,
	h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading as='h1' isLinked={false} {...props} />,
	h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading as='h2' {...props} />,
	h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading as='h3' {...props} />,
	h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading as='h4' {...props} />,
	a: (props: React.HTMLAttributes<HTMLAnchorElement>) => <Link showAnchorIcon {...props} />,
	input: (props) => <input aria-label='todo' {...props} />,
	pre: Pre,
};

export default MDXComponents;
