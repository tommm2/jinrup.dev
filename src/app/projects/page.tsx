import { Metadata } from 'next';
import { allProjects } from 'contentlayer/generated';

import FilterProjects from '@/components/FilterProjects';

export const metadata: Metadata = {
	title: '作品集',
	description: '歡迎來到我的專案頁面，這裡展示了我平時做的一些有趣的專案。',
};

const ProjectsPage = () => {
	return (
		<div>
			<h2 className='text-2xl font-bold'>🗂️ 作品集</h2>
			<p className='my-4'>我會定期展示一些有趣的專案。這些專案可能是基於最新技術的項目，也可能是具有實用性的工具和應用。我喜歡挑戰自己，並探索不同技術的可能性。</p>
			<FilterProjects projects={allProjects} />
		</div>
	);
};

export default ProjectsPage;