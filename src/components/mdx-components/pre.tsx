import { ComponentProps } from 'react';

import CopyButton from './copy-button';

interface PreProps extends ComponentProps<'pre'> {
	raw?: string
}

const Pre = (props: PreProps) => {
	const isMultiLine = (props.raw as string)
		.split('\n')
		.filter(item => !!item).length > 1;

	return (
		<pre className='group relative mt-0 bg-base-800/60 px-0' {...props}>
			{props.children}
			<CopyButton
				className={isMultiLine ? 'top-3' : 'top-2.5'}
				copyText={props.raw || ''}
			/>
		</pre>
	);
};

export default Pre;
