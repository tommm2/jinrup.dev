type Locale = 'zh-TW' | 'en' | undefined;

type Views = {
	slug: string;
	views: number;
}

type PinnedRepo = {
	id: any;
	name?: string;
	url?: string;
	stargazerCount?: number;
	primaryLanguage?: {
		name: string;
		color: string;
		id: string;
	};
	description?: string;
	createdAt?: string;
	forkCount?: number;
	isArchived?: boolean;
	isFork?: boolean;
}
