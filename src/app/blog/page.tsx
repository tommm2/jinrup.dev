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
		<section>
			<h1>📝 部落格</h1>
			<p className='my-4'>
				我會在這裡分享各種關於軟體開發和技術相關的內容，目前總共有 <span className='mr-1 font-bold text-primary-400'>{posts.length}</span>篇文章。
			</p>
			<FilterPosts posts={posts} />
		</section>
	);
};

export default BlogPage;
