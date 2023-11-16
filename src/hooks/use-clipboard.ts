import { useState } from 'react';

function useClipboard({ timeout = 2000 } = {}) {
	const [isCopied, setIsCopied] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [copyTimeout, setCopyTimeout] = useState<number | null>(null);

	const handleCopyResult = (value: boolean) => {
		window.clearTimeout(copyTimeout!);
		setCopyTimeout(window.setTimeout(() => setIsCopied(false), timeout));
		setIsCopied(value);
	};

	const copy = (valueToCopy: any) => {
		if ('clipboard' in navigator) {
			navigator.clipboard
				.writeText(valueToCopy)
				.then(() => handleCopyResult(true))
				.catch((err) => setError(err));
		} else {
			setError(new Error('useClipboard: navigator.clipboard is not supported'));
		}
	};

	const reset = () => {
		setIsCopied(false);
		setError(null);

		window.clearTimeout(copyTimeout!);
	};

	return { copy, reset, error, isCopied };
}

export default useClipboard;
