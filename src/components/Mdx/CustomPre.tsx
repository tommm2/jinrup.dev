import { ComponentPropsWithoutRef } from 'react';

import CopyButton from '@/components/CopyButton';

interface CustomPreProps extends ComponentPropsWithoutRef<'pre'> {
	raw?: string
}

const CustomPre = (props: CustomPreProps) => {
	return (
		<pre {...props}>
			<CopyButton copyText={props.raw || ''} />
			{props.children}
		</pre>
	);
};

export default CustomPre;
