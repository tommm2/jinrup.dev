import Link from 'next/link';

import GradientText from '@/components/GradientText';

interface TitleRowProps {
	isLinkVisible?: boolean
	titleText: string
	href?: string
}

const TitleRow = ({
	isLinkVisible = false,
	titleText,
	href = '',
}: TitleRowProps) => {
	return (
		<div className='mb-4 flex items-center justify-between'>
			<h2 className='text-lg font-bold uppercase tracking-wide text-base-950 dark:text-base-200'>
				<span>{titleText}</span>
				<div className='h-1 w-10 bg-primary-400'></div>
			</h2>
			{isLinkVisible ? (
				<Link
					className='flex items-center text-sm font-bold hover:opacity-80'
					href={href}
				>
					<GradientText className='from-secondary-400 to-primary-500'>
						<span>View More ▸</span>
					</GradientText>
				</Link>
			) : null}
		</div>
	);
};

export default TitleRow;
