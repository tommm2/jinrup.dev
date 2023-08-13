import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '時間線',
	description: '紀錄自己的人生經歷、學系歷程',
};

const TimelinePage = () => {
	return (
		<section>
			<h1 className='mb-4'>時間線</h1>
		</section>
	);
};

export default TimelinePage;
