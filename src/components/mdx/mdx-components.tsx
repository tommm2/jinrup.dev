import Image, { type ImageProps } from 'next/image';

import Link from '@/components/ui/link';

import Callout from './callout';
import LinkedHeading from './linked-heading';

const MdxComponents = {
	h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<LinkedHeading
			as='h1'
			{...props}
		/>
	),
	h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<LinkedHeading
			as='h2'
			{...props}
		/>
	),
	h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<LinkedHeading
			as='h3'
			{...props}
		/>
	),
	h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<LinkedHeading
			as='h4'
			{...props}
		/>
	),
	h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<LinkedHeading
			as='h5'
			{...props}
		/>
	),
	a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
		<Link
			className='font-semibold text-foreground underline decoration-primary underline-offset-4'
			{...props}
		/>
	),
	Callout,
	img: ({ alt, ...otherProps }: ImageProps) => (
		<Image
			className='size-auto rounded-lg'
			priority
			alt={alt}
			{...otherProps}
		/>
	),
	input: (props: React.HTMLAttributes<HTMLInputElement>) => (
		<input
			aria-label='todo'
			{...props}
		/>
	),
};

export default MdxComponents;
