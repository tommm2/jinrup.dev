import { Metadata } from 'next';
import { allPages } from 'contentlayer/generated';

import Mdx from '@/components/Mdx';
import Heading from '@/components/Heading';

export const metadata: Metadata = {
	title: '關於',
	description: '關於我的簡介、工作經驗等等...',
};

const AboutPage = () => {
	const page = allPages.find((page) => page.slug === 'about');

	if (!page) {
		return;
	}

	return (
		<section>
			<Heading
				as='h1'
				text='關於'
			/>
			<div className='prose'>
				<Mdx code={page.body.code} />
			</div>
		</section>
	);
};

export default AboutPage;
