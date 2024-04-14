'use client';

import Giscus from '@giscus/react';

import { giscusConfigs } from '@/config/giscus';

type CommentProps = {
	locale: Locale;
};

const Comment = ({ locale = 'zh-TW' }: CommentProps) => {
	return (
		<Giscus
			theme='dark'
			lang={locale}
			{...giscusConfigs}
		/>
	);
};

export default Comment;
