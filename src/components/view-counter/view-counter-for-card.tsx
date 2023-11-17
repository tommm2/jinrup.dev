'use client';

import Loading from '@/components/Loading';
import { usePostViews } from '@/hooks';

type ViewCounterCardProps = {
	slug: string
}

function ViewCounterForCard({
	slug,
}: ViewCounterCardProps) {
	const {
		views,
		isLoading: viewsIsLoading,
		isError: viewsIsError,
	} = usePostViews(slug);

	return (
		<div className='inline'>
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

export default ViewCounterForCard;
