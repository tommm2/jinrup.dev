import Image from 'next/image';

import GradientText from '../gradient-text';

const Avatar = () => {
	return (
		<div className='mb-8 space-y-4'>
			<span className='flex items-center gap-4'>
				<Image
					className='rounded-lg p-1.5 ring-2 ring-base-700'
					src='/images/avatar.jpg'
					alt='avatar'
					width={70}
					height={70}
				/>
				<div>
					<GradientText className='bg-gradient-to-br from-primary-500 to-secondary-500 text-2xl font-bold'>Tom Jin</GradientText>
					<div>Software Engineer • Taiwan 🇹🇼</div>
				</div>
			</span>
		</div>
	);
};

export default Avatar;
