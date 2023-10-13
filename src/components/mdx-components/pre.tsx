import { ComponentPropsWithoutRef } from 'react';

import CopyButton from './copy-button';

interface PreProps extends ComponentPropsWithoutRef<'pre'> {
	raw?: string
}

const Pre = (props: PreProps) => {
	const isMultiLine = (props.raw as string)?.split('\n').filter(item => !!item).length > 2;

	return (
		<pre className='group' {...props}>
			{props.children}
			<CopyButton
				className={isMultiLine ? 'right-4 top-3' : 'right-3 top-1'}
				copyText={props.raw || ''}
			/>
		</pre>
	);
};

export default Pre;
