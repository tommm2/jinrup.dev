import Image from 'next/image';

import GradientText from '@/components/gradient-text';

type AvatarProps = {
	title: string;
	subTitle: string;
}

function Avatar({
	title,
	subTitle,
}: AvatarProps) {
	return (
		<div className='flex items-center gap-4'>
			<Image
				className='animate-in rounded-full bg-base-200'
				src='/avatar.png'
				alt='avatar'
				width={80}
				height={80}
				priority
			/>
			<div>
				<GradientText
					as='h1'
					className='animate-in text-2xl font-bold tracking-tight animation-delay-1'
				>
					{title}
				</GradientText>
				<div className='w-fit animate-in rounded-full bg-gradient-to-r from-primary-400 to-accent-400 p-px animation-delay-2'>
					<div className='rounded-full bg-base-950/80 text-sm'>
						<GradientText
							as='span'
							className='flex items-center gap-0.5 from-primary-400 to-accent-400 px-2 py-px text-sm font-medium'>
							{subTitle}
						</GradientText>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Avatar;
