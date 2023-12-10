export type SiteConfig = typeof siteConfig;

const baseUrl = process.env.NODE_ENV === 'production'
	? 'https://jinrup.vercel.app'
	: 'http://localhost:3000';

export const siteConfig = {
	name: 'Tom Jin',
	author: 'Tom Jin',
	email: 'tom875694231@gmail.com',
	siteUrl: baseUrl,
	githubUsername: 'tommm2',
	links: {
		github: 'https://github.com/tommm2',
		linkedin: 'https://www.linkedin.com/in/jinrup',
	},
	openGraph: {
		type: 'website',
		title: 'Tom Jin',
		siteName: 'Tom Jin',
		url: baseUrl,
		images: [
			{
				url: '/opengraph-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Tom Jin',
			},
		],
	},
};
