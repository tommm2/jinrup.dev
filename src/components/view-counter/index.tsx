'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

import { fetcher } from '@/lib/fetcher';
import { usePollIfInView, usePostViews } from '@/hooks';

type ViewCounterProps = {
	className?: string;
	isViewTracking?: boolean;
	slug: string;
}

function ViewCounter({
	className,
	isViewTracking = false,
	slug,
}: ViewCounterProps) {
	const interval = 5000

	const {
		views,
		isLoading: viewsIsLoading,
		isError: viewsIsError,
		increment: incrementViews,
	  } = usePostViews(slug)

	  useEffect(() => {
		if (isViewTracking) {
			incrementViews();
		}
	  }, [isViewTracking]);

	return (
		<div className={className}>
			{views} views
		</div>
	);
}

export default ViewCounter;
