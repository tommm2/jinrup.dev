import Image from 'next/image';

const Hero = () => {
	return (
		<header>
			<div className='flex flex-col gap-4 sm:flex-row'>
				<Image
					className='rounded-2xl border border-base-200 p-1.5 dark:border-base-700'
					src='/images/avatar.jpg'
					alt='avatar'
					width={80}
					height={80}
				/>
				<div>
					<h1 className='text-2xl font-bold'>Tom Jin</h1>
					<span className='mr-1 text-base-950/60 dark:text-base-200/60'>Software Developer • Taiwan</span>
					🇹🇼
				</div>
			</div>
			<p className='mt-8'>歡迎來到我的個人網站，在這裡我會紀錄自己的學習歷程、分享開發經驗和軟體相關知識等等，同時也會展示一些自己覺得還不錯的 Side Project，希望未來能成為獨當一面的全端工程師。</p>
		</header>
	);
};

export default Hero;
