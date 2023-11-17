import { useEffect, useRef, useState } from 'react';
import { useIntersection } from 'react-use';

function useEnabledFirstInView() {
	const [enabled, setEnabled] = useState(false);
	const intersectionRef = useRef<HTMLLIElement | null>(null);
	const intersection = useIntersection(intersectionRef, {});

	useEffect(() => {
		if (!enabled && intersection?.isIntersecting) {
			setEnabled(true);
			intersectionRef.current = null;
		}
	}, [intersection?.isIntersecting, enabled]);

	return { enabled, intersectionRef };
}

export default useEnabledFirstInView;
