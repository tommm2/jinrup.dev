'use client';

import { RiCheckFill, RiFileCopy2Fill } from 'react-icons/ri';
import { useCopyToClipboard } from 'react-use';

import { cn } from '@/utils/cn';

type CopyButtonProps = {
	className?: string;
	copyText: string;
}

function CopyButton({
	className = '',
	copyText,
}: CopyButtonProps) {
	const [{ value }, copyToClipboard] = useCopyToClipboard();

	const _handleCopy = () => {
		copyToClipboard(copyText);
	};

	return (
		<button
			className={cn(
				'absolute right-3 rounded-lg bg-base-800/60 p-2.5 opacity-0 transition-all group-hover:opacity-100',
				{ 'text-emerald-500': !!value },
				className,
			)}
			title='copy code'
			aria-label='copy code'
			disabled={!!value}
			onClick={_handleCopy}
		>
			{!!value ? <RiCheckFill /> : <RiFileCopy2Fill />}
		</button>
	);
}

export default CopyButton;
