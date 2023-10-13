'use client';

import Giscus from '@giscus/react';

import { giscusConfigs } from '@/data';

const Comment = () => {
	return (
		<Giscus theme='dark' {...giscusConfigs} />
	);
};

export default Comment;
