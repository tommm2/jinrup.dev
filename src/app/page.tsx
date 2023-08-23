import { RiFolder2Line, RiUserLine } from 'react-icons/ri';
import { allPosts } from 'contentlayer/generated';

import { sortPostsByDate } from '@/lib/utils';
import Heading from '@/components/Heading';
import Hero from '@/components/Hero';
import PostCard from '@/components/PostCard';
import GradientLinkBlock from '@/components/GradientLinkBlock';

const HomePage = () => {
	const posts = sortPostsByDate(allPosts).slice(0, 3);

	return (
		<>
			<section className='grid grid-cols-1 gap-8 md:grid-cols-2'>
				<Hero />
				<div className='flex flex-col gap-8'>
					<GradientLinkBlock
						title='關於我'
						icon={<RiUserLine />}
						content='了解更多我的經歷'
						href='/about'
						className='from-primary-500 to-secondary-500'
					/>
					<GradientLinkBlock
						title='專案'
						icon={<RiFolder2Line />}
						content='查看我的一些作品'
						href='/projects'
						className='from-primary-500 to-secondary-500'
					/>
				</div>
			</section>
			<section>
				<Heading
					text='最新文章'
					hasUnderline
				/>
				<div className='space-y-4'>
					{posts.map((post) => <PostCard key={post.slug} post={post} />)}
				</div>
			</section>
		</>
	);
};

export default HomePage;
