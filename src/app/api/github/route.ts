import { NextRequest, NextResponse } from 'next/server';
import { Octokit } from 'octokit';
import { gql } from '@apollo/client';

import { getClient } from '@/lib/apollo';
import { siteConfig } from '@/config/site';

const query = gql`{
	user(login: "${siteConfig.githubUsername}") {
		pinnedItems(first: 6, types: REPOSITORY) {
			nodes {
				... on Repository {
					name
					url
					stargazerCount
					primaryLanguage {
						name
						color
						id
					}
					description
					createdAt
					forkCount
					id
					isArchived
					isFork
				}
			}
		}
	}
}`;

export async function GET(req: NextRequest) {
	const type = req.nextUrl.searchParams.get('type');

	if (type === 'pinnedRepos') {
		const { data } = await getClient().query({ query });

		const pinnedRepos: PinnedRepo[] | undefined = data.user.pinnedItems.nodes;

		return NextResponse.json(pinnedRepos);
	} else {
		// TODO: there will be a place to show the followers and stars on github.
		const octokit = new Octokit({
			auth: process.env.GITHUB_AUTH_TOKEN,
		});

		const { data: followers } = await octokit.request('GET /users/{username}/followers', {
			username: siteConfig.githubUsername,
		});
		const { data: repos } = await octokit.request('GET /users/{username}/repos', {
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
}
