import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { RiArrowRightLine } from 'react-icons/ri';

import Heading from '../Heading';

const Hero = () => {
	const t = useTranslations('common');

	return (
		<section>
			<div className='flex items-center gap-4'>
				<Image
					className='rounded-full p-1.5'
					src='/images/avatar.jpg'
					alt='avatar'
					width={90}
					height={90}
				/>
				<div>
					<Heading as='h1'>Tom Jin</Heading>
					<span className='text-muted mr-1'>Software Engineer • Taiwan</span>
					🇹🇼
				</div>
			</div>
			<p className='my-4'>
				{t('hero')}
			</p>
			<Link
				className='group relative inline-block rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 p-px'
				href='/about'
			>
				<div className='flex items-center gap-1 rounded-lg bg-transparent px-4 py-2 text-base-100 dark:bg-base-900/80'>
					<span>{t('moreAbout')}</span>
					<RiArrowRightLine className='transition-transform duration-300 group-hover:translate-x-1' />
				</div>
				<div className='absolute -inset-0 -z-10 rounded-lg bg-gradient-to-r blur-none transition-all group-hover:blur-[8px]'></div>
			</Link>
		</section>
	);
};

export default Hero;
