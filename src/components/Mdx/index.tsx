import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXComponents } from 'mdx/types';

import CustomImage from './CustomImage';
import CustomLink from './CustomLink';
import CustomPre from './CustomPre';

const components: MDXComponents = {
	Image: CustomImage,
	a: CustomLink,
	pre: CustomPre,
	input: (props) => {
		return <input aria-label='checkbox' {...props} />;
	},
};

interface MdxProps {
	code: string
}

const Mdx = ({ code }: MdxProps) => {
	const MDXContent = useMDXComponent(code);

	return (
		<MDXContent components={{ ...components }} />
	);
};

export default Mdx;
