import Link from '@/components/ui/link';
import { cn } from '@/utils/cn';

type LinkedHeadingProps = {
	className?: string;
	as: keyof JSX.IntrinsicElements;
	id?: string;
	children?: React.ReactNode;
};

const anchorEncode = (text?: string) => {
	if (!text) return undefined;

	return text.toLowerCase().replace(/ /g, '-');
};

const LinkedHeading = ({
	className,
	as,
	id: idProp,
	children,
	...otherProps
}: LinkedHeadingProps) => {
	const Component = as;

	let id = idProp || anchorEncode(children as string);

	return (
		<Component
			id={id}
			className={cn('mb-[0.5em] w-fit mt-[1em] scroll-mt-20 group', className)}
			{...otherProps}
		>
			<Link
				className='bg-gradient-to-b from-foreground from-30% to-foreground/40 bg-clip-text font-bold tracking-tight text-transparent no-underline [&_>_svg]:opacity-0 group-hover:[&_>_svg]:opacity-100'
				href={`#${id}`}
				showAnchorIcon
			>
				{children}
			</Link>
		</Component>
	);
};

export default LinkedHeading;
