import { cn } from '@/utils/cn';
import Anchor, { anchorEncode } from './anchor';

interface LinkedHeadingProps {
	as: keyof JSX.IntrinsicElements;
	id?: string;
	isLinked?: boolean;
	children?: React.ReactNode;
	className?: string;
}

const LinkedHeading = ({
	as,
	isLinked = true,
	id: idProp,
	className,
	children,
	...otherProps
}: LinkedHeadingProps) => {
	const Component = as;

	let id = idProp || anchorEncode(children as string);

	return (
		<Component
			className={cn(
				{ 'anchor target:scroll-mt-20': isLinked },
				isLinked ? {} : className
			)}
			id={id}
			{...otherProps}
		>
			{isLinked ? (
				<Anchor id={id}>{children}</Anchor>
			) : (
				<>{children}</>
			)}
		</Component>
	);
};

export default LinkedHeading;
