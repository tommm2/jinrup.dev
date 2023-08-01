'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

import { fetcher } from '@/lib/fetcher';

interface ViewCounterProps {
	slug: string
	isViewTracking?: boolean
}

function ViewCounter({
	slug,
	isViewTracking = false,
}: ViewCounterProps) {
	const { data } = useSWR<Views>(`/api/views?slug=${slug}`, fetcher);

	useEffect(() => {
		if (isViewTracking) {
			fetch(`/api/views?slug=${slug}`, {
				method: 'POST',
			});
		}
	}, [isViewTracking, slug]);

	return (
		<span>{`${data ? data.views : '--'}`} views</span>
	);
}

export default ViewCounter;
