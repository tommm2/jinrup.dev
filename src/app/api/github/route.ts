import { NextRequest, NextResponse } from 'next/server';
import { Octokit } from 'octokit';

import { siteConfig } from '@/config/site';

export async function GET(req: NextRequest) {
	const slug = req.nextUrl.searchParams.get('slug');

	const octokit = new Octokit({
		auth: process.env.GITHUB_AUTH_TOKEN,
	});

	if (slug) {
		const { data: repo } = await octokit.request('GET /repos/{owner}/{repo}', {
			owner: siteConfig.githubUsername,
			repo: slug,
		});

		return NextResponse.json({
			stars: repo?.stargazers_count,
			forksCount: repo?.forks_count,
		});
	}

	const { data: repos } = await octokit.request('GET /users/{username}/repos', {
		username: siteConfig.githubUsername,
	});
	const { data: followers } = await octokit.request('GET /users/{username}/followers', {
		username: siteConfig.githubUsername,
	});

	const stars = repos
		.filter(repo => !repo.fork)
		.reduce((acc, repo) => {
			return acc + (repo.stargazers_count ?? 0);
		}, 0);

	return NextResponse.json({
		followers: followers.length,
		stars,
	});
}
