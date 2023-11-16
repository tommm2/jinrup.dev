import { useEffect } from 'react';

function useClickOutside(
	ref: React.MutableRefObject<HTMLElement | null>,
	callback: () => void,
) {
	useEffect(() => {
		const _handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};

		document.addEventListener('mousedown', _handleClick);

		return () => {
			document.removeEventListener('mousedown', _handleClick);
		};
	}, [ref, callback]);
};

export default useClickOutside;
