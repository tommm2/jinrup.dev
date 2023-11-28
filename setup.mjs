import { promises as fs } from 'fs';
import path from 'path';

const blogPostZHTemplate = `---
title: '哈囉，世界!'
description: '這是第一篇文章'
publishedAt: 2023-07-10
image: /images/test.jpg
language: 'zh-TW'
---

哈囉，世界!`;
const blogPostENTemplate = `---
title: 'Hello, world!'
description: 'This is your first post'
publishedAt: 2023-07-10
image: /images/test.jpg
language: 'en'
---

Hello, World!`;

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
		"latestPosts": "Latest Posts",
		"seeMore": "See More",
		"placeholder": "Search articles",
		"noResults": "No Search Results",
		"blog": "Blog",
		"projects": "Projects",
		"about": "About",
		"noSupport": "The article does not support the current language."
	},
	"homePage": {
		"title": "我的網站",
		"paragraph": "這是首頁"
	},
	"blogPage": {
		"description": "這是部落格頁面",
		"subTitle": "<highlight></highlight> 關於程式碼等等的文章..."
	},
	"projectsPage": {
		"description": "這是專案頁面",
		"subTitle": "這裡是我參與的一些專案，查看我的 <link>Github</link> 獲取更多資訊！"
	},
	"aboutPage": {
		"description": "這是關於頁面"
	}
}`;
const messagesEN = `{
	"common": {
		"latestPosts": "最新文章",
		"seeMore": "查看更多",
		"placeholder": "查詢文章",
		"noResults": "查無結果",
		"blog": "部落格",
		"projects": "專案",
		"about": "關於",
		"noSupport": "文章不支援目前語系"
	},
	"homePage": {
		"title": "My Website",
		"paragraph": "This is home page"
	},
	"blogPage": {
		"description": "This is blog page",
		"subTitle": "<highlight></highlight> posts about code and more..."
	},
	"projectsPage": {
		"description": "This is projects page",
		"subTitle": "Here are some of the projects I've worked on, check out my <link>Github</link> for more!"
	},
	"aboutPage": {
		"description": "This is about page"
	}
}`;


const homePage = `import { useTranslations } from 'next-intl';

import GradientText from '@/components/gradient-text';

export default function HomePage() {
	const t = useTranslations('homePage');

	return (
		<>
			<div className='animate-in'>
				<GradientText
					className='text-3xl font-bold tracking-tight'
					as='h1'
				>
					{t('title')}
				</GradientText>
			</div>
			<p className='text-base-300/80 animate-in animation-delay-1 mt-1'>
				{t('paragraph')}
			</p>
		</>
	);
}`;

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

const deleteAllFilesExcept = async (directoryPath, fileToKeep) => {
	const files = await fs.readdir(directoryPath);

	const filesToDelete = files.filter(file => file !== fileToKeep);

	await Promise.all(filesToDelete.map(async file => {
		const filePath = path.join(directoryPath, file);

		await fs.unlink(filePath);
	}));
};

(async () => {
	const contentDir = path.join(process.cwd(), 'content');
	const messagesDir = path.join(process.cwd(), 'messages');
	const imagesDir = path.join(process.cwd(), 'public', 'images');
	const appDir = path.join(process.cwd(), 'src', 'app');

	await deleteFolderRecursive(contentDir);
	await deleteFolderRecursive(messagesDir);
	await deleteAllFilesExcept(imagesDir, 'test.jpg');

	const postDir = path.join(contentDir, 'blog', 'hello-world');
	const aboutDir = path.join(contentDir, 'pages', 'about');

	await fs.mkdir(postDir, { recursive: true });
	await fs.mkdir(aboutDir, { recursive: true });
	await fs.mkdir(messagesDir, { recursive: true });

	await fs.writeFile(path.join(postDir, 'index.mdx'), blogPostZHTemplate);
	await fs.writeFile(path.join(postDir, 'index.en.mdx'), blogPostENTemplate);
	await fs.writeFile(path.join(aboutDir, 'index.mdx'), aboutZHTemplate);
	await fs.writeFile(path.join(aboutDir, 'index.en.mdx'), aboutENTemplate);

	await fs.writeFile(path.join(messagesDir, 'zh-TW.json'), messagesZH);
	await fs.writeFile(path.join(messagesDir, 'en.json'), messagesEN);

	await fs.writeFile(path.join(appDir, '[locale]', 'page.tsx'), homePage);
})();
