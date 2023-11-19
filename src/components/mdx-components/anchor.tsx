import React, { useEffect, useRef, useState } from 'react';

import Link from '@/components/link';

type AnchorProps = {
	id?: string;
	children?: React.ReactNode;
}

export const anchorEncode = (text?: string) => {
	if (!text) return undefined;

	return text.toLowerCase().replace(/ /g, '-');
};

function Anchor({
	children,
	id,
}: AnchorProps) {
	const ref = useRef<HTMLAnchorElement>(null);
	const [anchorId, setAnchorId] = useState<string | undefined>();

	useEffect(() => {
		if (!ref.current || !id) return;

		setAnchorId(anchorEncode(ref.current.textContent || undefined));
	}, [id]);

	return (
		<Link
			ref={ref}
			className='group relative flex w-fit items-center gap-1 text-inherit'
			href={`#${id || anchorId}`}
		>
			{children}
			<span className='opacity-0 transition-opacity group-hover:opacity-100'>
				#
			</span>
		</Link>
	);
};

export default Anchor;
