import { ComponentPropsWithoutRef } from 'react';

import CopyButton from '@/components/CopyButton';

interface CustomPreProps extends ComponentPropsWithoutRef<'pre'> {
	raw?: string
}

const CustomPre = (props: CustomPreProps) => {
	return (
		<pre
			className='relative mt-0 border border-base-600/40 bg-base-800 px-0 dark:bg-base-900/40'
			{...props}
		>
			<CopyButton copyText={props.raw || ''} />
			{props.children}
		</pre>
	);
};

export default CustomPre;
