import { cn } from '@/lib/utils';
import Anchor, { anchorEncode } from './anchor';

interface LinkedHeadingProps {
	as: keyof JSX.IntrinsicElements;
	id?: string;
	linked?: boolean;
	children?: React.ReactNode;
	className?: string;
}

const LinkedHeading = ({
	as,
	linked = true,
	id: idProp,
	className,
	...props
}: LinkedHeadingProps) => {
	const Component = as;

	let id = idProp || anchorEncode(props.children as string);

	return (
		<Component
			className={cn(
				{ 'anchor target:scroll-mt-20': linked },
				linked ? {} : className
			)}
			id={id}
			{...props}
		>
			{linked ? (
				<Anchor id={id}>{props.children}</Anchor>
			) : (
				<>{props.children}</>
			)}
		</Component>
	);
};

export default LinkedHeading;
