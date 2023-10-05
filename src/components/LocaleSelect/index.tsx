'use client';

import { useLocale } from 'next-intl';

import { Link, usePathname } from '@/lib/navigation';

function LocaleSelect() {
	const locale = useLocale();
	const pathname = usePathname();
	const otherLocale = locale === 'en' ? 'zh-TW' : 'en';

	return (
		<Link
			href={pathname}
			locale={otherLocale}
		>
			{otherLocale}
		</Link>
	);
}

export default LocaleSelect;
