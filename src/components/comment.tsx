'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

import { giscusConfigs } from '@/config/giscus';

type CommentProps = {
	locale: Locale;
};

const Comment = ({ locale = 'zh-TW' }: CommentProps) => {
	const { resolvedTheme } = useTheme();

	return (
		<Giscus
			theme={resolvedTheme === 'light' ? 'light' : 'dark'}
			lang={locale}
			{...giscusConfigs}
		/>
	);
};

export default Comment;
