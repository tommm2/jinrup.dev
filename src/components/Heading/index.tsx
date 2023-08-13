interface HeadingProps {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	text: string
}

const Heading = ({
	as = 'h2',
	text,
}: HeadingProps) => {
	const Tag = as;

	return (
		<Tag className='mb-4 mt-8 uppercase tracking-wide text-base-950 dark:text-base-200'>
			<span>{text}</span>
			<div className='h-1 w-8 bg-primary-400' />
		</Tag>
	);
};

export default Heading;
