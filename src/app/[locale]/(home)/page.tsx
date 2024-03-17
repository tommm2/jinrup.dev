import { useLocale, useTranslations } from 'next-intl';
import { allPosts, allProjects } from 'contentlayer/generated';

import Hero from './hero';
import Projects from './projects';
import Posts from './posts';

function HomePage() {
	const t = useTranslations();
	const locale = useLocale() as Locale;
	const projects = allProjects
		.filter((project) => project.language === locale)
		.splice(0, 2);
	const posts = allPosts
		.filter((posts) => posts.language === locale)
		.splice(0, 3);

	return (
		<div className='space-y-16'>
			<Hero
				name='Tom Jin'
				subTitle={t('homePage.subTitle')}
				description={t('homePage.description')}
			/>
			<Projects
				title={t('common.projects')}
				projects={projects}
				viewMoreText={t('common.viewMore')}
			/>
			<Posts
				title={t('common.latestPosts')}
				posts={posts}
				viewMoreText={t('common.viewMore')}
			/>
		</div>
	);
}

export default HomePage;
