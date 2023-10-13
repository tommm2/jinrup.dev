import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

interface HeadingProps {
	className?: string
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children?: React.ReactNode | string
}

const Heading = (props: HeadingProps) => {
	const {
		className = '',
		as = 'h2',
		children,
	} = props;

	const Component = as;

	return (
		<Component className={cn('font-bold text-base-200', className)}>
			<Balancer>{children}</Balancer>
		</Component>
	);
};

export default Heading;
