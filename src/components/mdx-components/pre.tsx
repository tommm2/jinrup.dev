import { ComponentProps } from 'react';

import CopyButton from './copy-button';

type PreProps = {
	raw?: string;
} & ComponentProps<'pre'>;

function Pre(props: PreProps) {
	// const isMultiLine = (props.raw as string).split('\n').filter((item) => !!item).length > 1;

	return (
		<pre
			className='group'
			{...props}
		>
			{props.children}
			<CopyButton
				// className={isMultiLine ? 'top-3' : 'top-2.5'}
				copyText={props.raw || ''}
			/>
		</pre>
	);
}

export default Pre;
