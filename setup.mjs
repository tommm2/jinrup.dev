import { promises as fs } from 'fs';
import path from 'path';

const blogPostZHTemplate = `---
title: '哈囉，世界!'
description: '這是第一篇文章'
publishedAt: 2023-07-10
language: 'zh-TW'
---

哈囉，世界!`;

const blogPostENTemplate = `---
title: 'Hello, world!'
description: 'This is your first post'
publishedAt: 2023-07-10
language: 'en'
---

Hello, World!`;

const projectZHTemplate = `---
title: 第一個專案
description: 我的第一個專案。
imageUrl: ''
repoName: 'first-post'
repoUrl: 'https://github.com/tommm2'
demoUrl: 'https://github.com/tommm2'
language: zh-TW
---

我的第一個專案。`;

const projectENTemplate = `---
title: First Project
description: My first project.
imageUrl: ''
repoName: 'first-post'
repoUrl: 'https://github.com/tommm2'
demoUrl: 'https://github.com/tommm2'
language: en
---

My first project。`;

const aboutZHTemplate = `---
language: 'zh-TW'
---

介紹你自己!
`;

const aboutENTemplate = `---
language: 'en'
---

Introduce yourself!
`;

const messagesZH = `{
	"common": {
		"latestPosts": "最新文章",
		"allPosts": "所有文章",
		"placeholder": "查詢文章",
		"noResults": "查無結果",
		"viewMore": "查看更多",
		"home": "首頁",
		"blog": "部落格",
		"projects": "專案",
		"about": "關於",
		"noSupport": "文章不支援目前語系",
		"backToBlog": "返回部落格",
		"backToProjects": "返回專案",
		"postViews": "瀏覽次數: <count></count> 次"
	},
	"homePage": {
		"title": "帥氣小子",
		"subTitle": "軟體工程師",
		"description": "歡迎來到我的網站。"
	},
	"blogPage": {
		"description": "這是部落格頁面",
		"subTitle": "<highlight></highlight> 關於程式碼等等的文章..."
	},
	"projectsPage": {
		"description": "展示一些我做的專案。"
	},
	"aboutPage": {
		"description": "這是關於頁面"
	}
}`;

const messagesEN = `{
	"common": {
		"latestPosts": "Latest Posts",
		"allPosts": "All Posts",
		"placeholder": "Search articles",
		"noResults": "No Search Results",
		"viewMore": "view more",
		"home": "Home",
		"blog": "Blog",
		"projects": "Projects",
		"about": "About",
		"noSupport": "The article does not support the current language.",
		"backToBlog": "Back to blog",
		"backToProjects": "Back to Projects",
		"postViews": "<count></count> views"
	},
	"homePage": {
		"title": "Handsome boy",
		"subTitle": "Software Engineer",
		"description": "Welcome to my website."
	},
	"blogPage": {
		"description": "This is blog page",
		"subTitle": "<highlight></highlight> posts about code and more..."
	},
	"projectsPage": {
		"description": "Showcase of my projects."
	},
	"aboutPage": {
		"description": "This is about page"
	}
}`;

const homePageTemplate = `import { useLocale, useTranslations } from 'next-intl';
import { allPosts, allProjects } from 'contentlayer/generated';

import HeroSection from './partials/hero-section';
import ProjectSection from './partials/project-section';
import PostSection from './partials/post-section';

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
			<HeroSection
				name='Your Name'
				subTitle={t('homePage.subTitle')}
				description={t('homePage.description')}
			/>
			<ProjectSection
				title={t('common.projects')}
				projects={projects}
				viewMoreText={t('common.viewMore')}
			/>
			<PostSection
				title={t('common.latestPosts')}
				posts={posts}
				viewMoreText={t('common.viewMore')}
			/>
		</div>
	);
}

export default HomePage;
`;

const deleteFolderRecursive = async (path) => {
	const stat = await fs.stat(path);

	if (stat.isDirectory()) {
		const files = await fs.readdir(path);

		await Promise.all(files.map((file) => deleteFolderRecursive(`${path}/${file}`)));
		await fs.rmdir(path);
	} else {
		await fs.unlink(path);
	}
};

// const deleteAllFilesExcept = async (directoryPath, fileToKeep) => {
// 	const files = await fs.readdir(directoryPath);

// 	const filesToDelete = files.filter(file => file !== fileToKeep);

// 	await Promise.all(filesToDelete.map(async file => {
// 		const filePath = path.join(directoryPath, file);

// 		await fs.unlink(filePath);
// 	}));
// };

(async () => {
	const contentDir = path.join(process.cwd(), 'content');
	const messagesDir = path.join(process.cwd(), 'messages');
	const publicDir = path.join(process.cwd(), 'public');
	const homeDir = path.join(process.cwd(), 'src', 'app', '[locale]', '(home)');

	await deleteFolderRecursive(contentDir);
	await deleteFolderRecursive(messagesDir);
	await deleteFolderRecursive(publicDir);
	// await deleteAllFilesExcept(imagesDir, 'test.jpg');

	const helloWorldDir = path.join(contentDir, 'blog', 'hello-world');
	const firstProjectDir = path.join(contentDir, 'projects', 'first-project');
	const aboutDir = path.join(contentDir, 'pages', 'about');

	await fs.mkdir(publicDir);
	await fs.mkdir(messagesDir, { recursive: true });
	await fs.mkdir(helloWorldDir, { recursive: true });
	await fs.mkdir(firstProjectDir, { recursive: true });
	await fs.mkdir(aboutDir, { recursive: true });

	await fs.writeFile(path.join(messagesDir, 'zh-TW.json'), messagesZH);
	await fs.writeFile(path.join(messagesDir, 'en.json'), messagesEN);
	await fs.writeFile(path.join(helloWorldDir, 'index.mdx'), blogPostZHTemplate);
	await fs.writeFile(path.join(helloWorldDir, 'index.en.mdx'), blogPostENTemplate);
	await fs.writeFile(path.join(firstProjectDir, 'index.mdx'), projectZHTemplate);
	await fs.writeFile(path.join(firstProjectDir, 'index.en.mdx'), projectENTemplate);
	await fs.writeFile(path.join(aboutDir, 'index.mdx'), aboutZHTemplate);
	await fs.writeFile(path.join(aboutDir, 'index.en.mdx'), aboutENTemplate);

	await fs.writeFile(path.join(homeDir, 'page.tsx'), homePageTemplate);
})();
