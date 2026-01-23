import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

import Link from '@/components/ui/link';

export const metadata: Metadata = {
	title: '404',
};

const NotFoundPage = () => {
	const t = useTranslations('common');

	return (
		<div className='animate-fade-in'>
			<p>{t('notFound')}</p>
			<Link
				className='mt-4'
				variant='block'
				href='/'
				showAnchorIcon
				anchorIcon={<ArrowRight className='ml-1 size-4' />}
			>
				{t('backToHome')}
			</Link>
		</div>
	);
};

export default NotFoundPage;
