'use client';

import { Github } from 'lucide-react';
import useSWR from 'swr';

import { NumberTicker } from '@/components/ui/number-ticker';
import { fetcher } from '@/lib/fetcher';

type GitHubData = {
	followers: number;
	stars: number;
};

const GitHubStats = () => {
	const { data, isLoading } = useSWR<GitHubData>('/api/github', fetcher);

	return (
		<div className='flex h-full flex-col justify-between rounded-xl border border-border bg-card p-3'>
			<div className='flex items-center gap-2 text-muted-foreground'>
				<Github className='size-3.5' />
				<span className='text-xs font-medium'>Stats</span>
			</div>
			<div className='mt-2 grid grid-cols-7 grid-rows-4 gap-1'>
				{Array.from({ length: 28 }).map((_, i) => (
					<div
						key={i}
						className='aspect-square rounded-[1px]'
						style={{
							backgroundColor: `hsl(142 ${Math.random() > 0.6 ? 70 : 30}% ${Math.random() > 0.7 ? 35 : 15}%)`,
							opacity: Math.random() > 0.3 ? 1 : 0.5,
						}}
					/>
				))}
			</div>
			<div className='mt-2 flex gap-4'>
				<div>
					<div className='text-xl font-bold'>
						{isLoading ? (
							<span className='animate-pulse'>--</span>
						) : (
							<NumberTicker value={data?.followers ?? 0} />
						)}
					</div>
					<div className='text-[10px] text-muted-foreground'>Followers</div>
				</div>
				<div>
					<div className='text-xl font-bold'>
						{isLoading ? (
							<span className='animate-pulse'>--</span>
						) : (
							<NumberTicker value={data?.stars ?? 0} />
						)}
					</div>
					<div className='text-[10px] text-muted-foreground'>Stars</div>
				</div>
			</div>
		</div>
	);
};

export default GitHubStats;
