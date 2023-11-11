'use client';

import Giscus from '@giscus/react';

import { giscusConfigs } from '@/config/giscus';

interface CommentProps {
	locale: Locale
}

export default function Comment({
	locale = 'zh-TW',
}: CommentProps) {
	return (
		<Giscus
			theme='dark'
			lang={locale}
			{...giscusConfigs}
		/>
	);
};
