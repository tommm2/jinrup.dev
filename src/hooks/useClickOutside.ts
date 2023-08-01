import { useEffect, useState, useRef } from 'react';

export default function useClickOutside() {
	const elementRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	const _handleClick = (event: MouseEvent) => {
		if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', _handleClick);

		return () => {
			document.removeEventListener('mousedown', _handleClick);
		};
	}, []);

	return {
		elementRef,
		isVisible,
		setIsVisible,
	};
};
