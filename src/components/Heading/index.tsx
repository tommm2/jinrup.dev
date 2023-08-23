interface HeadingProps {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	text: string
	hasUnderline?: boolean,
}

const Heading = ({
	as = 'h2',
	text,
	hasUnderline = false,
}: HeadingProps) => {
	const Tag = as;

	return (
		<Tag className='text-title uppercase tracking-wide'>
			{text}
			{hasUnderline ? (
				<div className='mb-4 h-1 w-8 bg-gradient-to-r from-primary-500 to-secondary-500'></div>
			) : null}
		</Tag>
	);
};

export default Heading;
