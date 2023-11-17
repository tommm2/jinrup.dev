import { useEffect, useRef, useState } from 'react';
import { useIntersection, useInterval } from 'react-use';

function usePollIfInView(interval: number = 1000, max: number = 3) {
	const intersectionRef = useRef(null);
	const intersection = useIntersection(intersectionRef, {});

	const [shouldPoll, setShouldPoll] = useState(false);
	const [polledCount, setPolledCount] = useState(0);

	useInterval(() => {
		if (polledCount >= max) {
			setShouldPoll(false);
		} else {
			setPolledCount(polledCount + 1);
		}
	}, shouldPoll ? interval : null);

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setShouldPoll(true);
			setPolledCount(0);
		} else {
			setShouldPoll(false);
		}
	}, [intersection?.isIntersecting]);

	return {
		intersectionRef,
		shouldPoll,
	};
}

export default usePollIfInView;
