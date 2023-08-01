import { Metadata } from 'next';

import { experiences } from '@/data';

import Timeline from '@/components/Timeline';

export const metadata: Metadata = {
	title: '關於',
	description: '關於我的簡介、工作經驗等等...',
};

const AboutPage = () => {
	return (
		<section>
			<h2 className='text-2xl font-bold'>關於我</h2>
			<Timeline>
				{experiences.map(item => (
					<Timeline.Item key={item.title}>
						<Timeline.Point isProgressing={item.isProgressing} />
						<Timeline.Time>{item.period}</Timeline.Time>
						<div>{item.title}</div>
					</Timeline.Item>
				))}
			</Timeline>
		</section>
	);
};

export default AboutPage;
