import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Hero = () => {
	const t = useTranslations('common');

	return (
		<section className='space-y-4'>
			<div className='flex items-center gap-4'>
				<Image
					className='rounded-lg p-1.5 ring-2 ring-base-700'
					src='/images/avatar.jpg'
					alt='avatar'
					width={70}
					height={70}
				/>
				<div>
					<div>Tom Jin</div>
					<div>Software Engineer • Taiwan 🇹🇼</div>
				</div>
			</div>
			<p>
				{t('hero')}
			</p>
			{/* <Link
				className='group relative inline-block rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 p-px'
				href='/about'
			>
				<div className='flex items-center gap-1 rounded-lg bg-transparent px-4 py-2 text-base-100 dark:bg-base-900/80'>
					<span>{t('moreAbout')}</span>
					<RiArrowRightLine className='transition-transform duration-300 group-hover:translate-x-1' />
				</div>
				<div className='absolute -inset-0 -z-10 rounded-lg bg-gradient-to-r blur-none transition-all group-hover:blur-[8px]'></div>
			</Link> */}
		</section>
	);
};

export default Hero;
