'use client';

import { useEffect, useState } from 'react';
import { RiFileCopy2Line, RiCheckLine } from 'react-icons/ri';
import clsx from 'clsx';

interface CopyButtonProps {
	copyText: string
}

const CopyButton = ({ copyText }: CopyButtonProps) => {
	const [isCopied, setIsCopied] = useState(false);

	const _handleClick = async () => {
		await navigator.clipboard.writeText(copyText);
		setIsCopied(true);
	};

	useEffect(() => {
		const timer = setTimeout(() => setIsCopied(false), 3000);

		return () => clearTimeout(timer);
	}, [isCopied]);


	return (
		<button
			className={clsx(
				'absolute right-2 top-2 rounded-md border bg-base-800 px-1.5 py-1 transition-colors duration-200 dark:bg-base-900',
				isCopied ? 'border-emerald-500' : 'border-base-700'
			)}
			aria-label='Click to clipboard'
			disabled={isCopied}
			onClick={_handleClick}
		>
			{isCopied ? <RiCheckLine className='text-emerald-500' /> : <RiFileCopy2Line />}
		</button>
	);
};

export default CopyButton;
