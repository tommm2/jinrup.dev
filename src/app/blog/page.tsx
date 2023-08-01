import { Metadata } from 'next';
import { allPosts } from 'contentlayer/generated';

import { sortPostsByDate } from '@/lib/utils';

import FilterPosts from '@/components/FilterPosts';

export const metadata: Metadata = {
	title: '部落格',
	description: '歡迎來到我的部落格！這裡記錄著我在軟體開發和技術相關領域的學習心得、知識分享以及解決方案',
};

const BlogPage = () => {
	const posts = sortPostsByDate(allPosts);

	return (
		<div>
			<h2 className='text-2xl font-bold'>📝 部落格</h2>
			<p className='my-4'>
				我會在這裡分享各種關於軟體開發和技術相關的內容，包括易懂的技術教學、開發心得和解決方案，以及追蹤最新技術趨勢和前沿議題，期望能與大家共同學習和進步。
			</p>
			<FilterPosts posts={posts} />
		</div>
	);
};

export default BlogPage;
