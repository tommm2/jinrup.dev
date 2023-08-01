import { ComponentPropsWithoutRef, FC } from 'react';

interface CustomLinkProps extends ComponentPropsWithoutRef<'a'> {}

const CustomLink = (props: CustomLinkProps) => {
	const { href = '' } = props;

	if (href.startsWith('#')) {
		return <a href={href} {...props} />;
	}

	return (
		<a href={href} target='_blank' rel='noopener noreferrer' {...props} />
	);
};

export default CustomLink;
