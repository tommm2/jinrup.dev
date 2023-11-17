'use client';

import { useEffect } from 'react';

import Loading from '@/components/Loading';
import { usePollIfInView, usePostViews } from '@/hooks';

type ViewCounterForPostProps = {
	slug: string
}

function ViewCounterForPost({ slug }: ViewCounterForPostProps) {
	const interval = 5000;
	const { shouldPoll, intersectionRef } = usePollIfInView(interval);

	const {
		views,
		isLoading: viewsIsLoading,
		isError: viewsIsError,
		increment: incrementView,
	} = usePostViews(slug, {
		revalidateOnMount: false,
		refreshInterval: shouldPoll ? interval : 0,
		dedupingInterval: interval,
	});

	useEffect(() => {
		incrementView();
	}, []);

	return (
		<div className='inline' ref={intersectionRef}>
			{viewsIsError || viewsIsLoading ? (
				<Loading />
			) : (
				<span className='-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tracking-tight'>
					{views?.toLocaleString()}
				</span>
			)}{' '}
			views
		</div>
	);
}

export default ViewCounterForPost;
