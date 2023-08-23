'use client';

import { useTheme } from 'next-themes';
import Giscus from '@giscus/react';

import { giscusConfigs } from '@/data';

const Comment = () => {
	const { theme } = useTheme();

	return (
		<Giscus
			theme={theme}
			{...giscusConfigs}
		/>
	);
};

export default Comment;
