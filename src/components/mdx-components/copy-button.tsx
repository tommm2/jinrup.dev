'use client';

import { useEffect, useState } from 'react';
import { RiCheckFill, RiFileCopy2Fill } from 'react-icons/ri';

import { cn } from '@/lib/utils';

interface CopyButtonProps {
	className?: string,
	copyText: string
}

const CopyButton = ({
	className = '',
	copyText,
}: CopyButtonProps) => {
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
			className={cn(
				'absolute rounded-md border bg-base-700/60 border-base-700 p-2 opacity-0 transition-all group-hover:opacity-100',
				{ 'text-primary-500': isCopied },
				className,
			)}
			aria-label='Click to clipboard'
			disabled={isCopied}
			onClick={_handleClick}
		>
			{isCopied ? <RiCheckFill className='text-emerald-500' /> : <RiFileCopy2Fill />}
		</button>
	);
};

export default CopyButton;
