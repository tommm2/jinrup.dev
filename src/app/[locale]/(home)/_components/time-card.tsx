'use client';

import { useEffect, useState } from 'react';

const TimeCard = () => {
	const [time, setTime] = useState<string>('');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const updateTime = () => {
			const now = new Date();
			const taiwanTime = now.toLocaleTimeString('en-US', {
				timeZone: 'Asia/Taipei',
				hour: 'numeric',
				minute: '2-digit',
				hour12: true,
			});

			setTime(taiwanTime);
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	if (!mounted) {
		return (
			<div className='flex h-full items-center justify-center rounded-xl border border-border bg-card p-4 md:p-6'>
				<div className='text-xl font-bold tracking-tight md:text-2xl'>--:-- --</div>
			</div>
		);
	}

	return (
		<div className='flex h-full items-center justify-center rounded-xl border border-border bg-card p-4 md:p-6'>
			<div className='text-xl font-bold tracking-tight md:text-2xl'>{time}</div>
		</div>
	);
};

export default TimeCard;
