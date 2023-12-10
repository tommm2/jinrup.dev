export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'Tom Jin',
	author: 'Tom Jin',
	email: 'tom875694231@gmail.com',
	siteUrl: 'https://jinrup.vercel.app',
	githubUsername: 'tommm2',
	links: {
		github: 'https://github.com/tommm2',
		linkedin: 'https://www.linkedin.com/in/jinrup',
	},
	openGraph: {
		type: 'website',
		title: 'Tom Jin',
		siteName: 'Tom Jin',
		url: 'https://jinrup.vercel.app',
		images: [
			{
				url: 'https://jinrup.vercel.app/opengraph-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Tom Jin',
			},
		],
	},
};
