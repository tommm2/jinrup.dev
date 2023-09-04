import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

import Heading from '../Heading';

const Hero = () => {
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
				你好，我是一名熱衷於網頁開發領域的軟體工程師。透過這個網站開始學習撰寫技術文章，並記錄自己所學到的軟題知識。
			</p>
			<Link
				className='group relative inline-block rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 p-px'
				href='/about'
			>
				<div className='flex items-center gap-1 rounded-lg bg-transparent px-4 py-2 text-base-100 dark:bg-base-900/80'>
					<span>瞭解更多</span>
					<RiArrowRightLine className='transition-transform duration-300 group-hover:translate-x-1' />
				</div>
				<div className='absolute -inset-0 -z-10 rounded-lg bg-gradient-to-r blur-none transition-all group-hover:blur-[8px]'></div>
			</Link>
		</section>
	);
};

export default Hero;
