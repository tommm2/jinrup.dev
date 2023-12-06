'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import Loading from '@/components/loading';
import { usePostViews } from '@/hooks';

type ViewCounterProps = {
	slug: string;
	shouldIncrement?: boolean;
}

function ViewCounter({
	slug,
	shouldIncrement = false,
}: ViewCounterProps) {
	const t = useTranslations('common');

	const {
		views,
		isLoading: viewsIsLoading,
		isError: viewsIsError,
		increment,
	} = usePostViews(slug);

	useEffect(() => {
		if (shouldIncrement) {
			increment();
		}
	}, []);

	return (
		<span>
			{t.rich('postViews', {
				count: () => (viewsIsError || viewsIsLoading)
					? <Loading />
					: (
						<span className='-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tracking-tight'>
							{views?.toLocaleString()}
						</span>
					),
			})}
		</span>
	);
}

export default ViewCounter;
