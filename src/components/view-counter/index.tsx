'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

import { fetcher } from '@/lib/fetcher';

interface ViewCounterProps {
	className?: string;
	isViewTracking?: boolean;
	slug: string;
	as?: keyof JSX.IntrinsicElements;
}

function ViewCounter({
	className,
	isViewTracking = false,
	slug,
	as = 'span',
}: ViewCounterProps) {
	const Component = as;

	const { data } = useSWR<Views>(`/api/views?slug=${slug}`, fetcher);

	useEffect(() => {
		if (isViewTracking) {
			setTimeout(() => {
				fetch(`/api/views?slug=${slug}`, {
					method: 'POST',
				});
			}, 5000);
		}
	}, [isViewTracking, slug]);

	return (
		<Component className={className}>
			{data?.views || 0} views
		</Component>
	);
}

export default ViewCounter;
