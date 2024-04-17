import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import Link from '@/components/ui/link';
import { RiArrowRightLine } from 'react-icons/ri';

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
				anchorIcon={<RiArrowRightLine className='ml-1' />}
			>
				{t('backToHome')}
			</Link>
		</div>
	);
};

export default NotFoundPage;
