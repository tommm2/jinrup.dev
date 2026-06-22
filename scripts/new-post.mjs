#!/usr/bin/env node
import { mkdir, writeFile, access } from 'node:fs/promises';
import { join } from 'node:path';

// 用法：
//   pnpm new:post <slug> [--title "中文標題"] [--title-en "English Title"]
//   pnpm new:post my-first-post --title "我的第一篇文章" --title-en "My First Post"

const LOCALES = [
	{ file: 'index.mdx', language: 'zh-TW' },
	{ file: 'index.en.mdx', language: 'en' },
];

function parseArgs(argv) {
	const args = { _: [] };
	for (let i = 0; i < argv.length; i++) {
		const token = argv[i];
		if (token.startsWith('--')) {
			args[token.slice(2)] = argv[++i];
		} else {
			args._.push(token);
		}
	}
	return args;
}

function isValidSlug(slug) {
	return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

function today() {
	const now = new Date();
	const yyyy = now.getFullYear();
	const mm = String(now.getMonth() + 1).padStart(2, '0');
	const dd = String(now.getDate()).padStart(2, '0');
	return `${yyyy}-${mm}-${dd}`;
}

function frontmatter({ title, slug, description, publishedAt, language }) {
	return [
		'---',
		`title: '${title}'`,
		`slug: '${slug}'`,
		`description: '${description}'`,
		`publishedAt: ${publishedAt}`,
		`language: '${language}'`,
		'---',
		'',
		'',
	].join('\n');
}

async function exists(path) {
	try {
		await access(path);
		return true;
	} catch {
		return false;
	}
}

async function main() {
	const args = parseArgs(process.argv.slice(2));
	const slug = args._[0];

	if (!slug) {
		console.error('✗ 請提供 slug：pnpm new:post <slug> [--title "標題"] [--title-en "Title"]');
		process.exit(1);
	}

	if (!isValidSlug(slug)) {
		console.error(`✗ slug 格式不合法：「${slug}」`);
		console.error('  只能用小寫英數與連字號，例如：my-first-post');
		process.exit(1);
	}

	const dir = join('content', 'blog', slug);
	if (await exists(dir)) {
		console.error(`✗ 資料夾已存在：${dir}`);
		process.exit(1);
	}

	const publishedAt = today();
	const titles = {
		'zh-TW': args.title ?? '請填寫標題',
		en: args['title-en'] ?? 'Untitled',
	};

	await mkdir(dir, { recursive: true });

	for (const { file, language } of LOCALES) {
		const content = frontmatter({
			title: titles[language],
			slug,
			description: '',
			publishedAt,
			language,
		});
		await writeFile(join(dir, file), content, 'utf8');
	}

	console.log(`✓ 已建立文章：${dir}`);
	for (const { file } of LOCALES) {
		console.log(`  - ${join(dir, file)}`);
	}
	console.log(`\n下一步：填好 description / 正文，然後 pnpm dev 預覽。`);
}

main().catch(err => {
	console.error('✗ 建立失敗：', err);
	process.exit(1);
});
