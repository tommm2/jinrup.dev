type Core = {
  setOutput: (name: string, value: string) => void;
};

type Result = {
	url: string;
	isRepresentativeRun: string;
	htmlPath: string;
	jsonPath: string;
	summary: {
		performance: number;
		accessibility: number;
		'best-practices': number;
		seo: number;
	}
}

const stoplight = (res: number) => (res >= 90 ? '🟢' : res >= 75 ? '🟠' : '🔴');
const normalizeScore = (res: number) => Math.round(res * 100);
const formatScore = (res: number) => {
	const normalizedScore = normalizeScore(res);

	return `${stoplight(normalizedScore)} ${normalizedScore}`;
};

export const formatLighthouseResults = ({ core }: { core: Core }) => {
	// this will be the shape of https://github.com/treosh/lighthouse-ci-action#manifest
	const results = JSON.parse(process.env.LIGHTHOUSE_RESULT as string);

	// this will be the shape of https://github.com/treosh/lighthouse-ci-action#links
	const links = JSON.parse(process.env.LIGHTHOUSE_LINKS as string);

	// start creating our markdown table
	const header = [
		'Lighthouse Results',
		'URL | Performance | Accessibility | Best Practices | SEO | Report',
		'| - | - | - | - | - | - |',
	];

	// map over each url result, formatting and linking to the output
	const urlResults = results.map(({  url, summary }: Result) => {
		// make the tested link as a markdown link, without the long-generated host
		const shortPreviewLink = `[${url.replace(
			process.env.VERCEL_PREVIEW_URL as string,
			'',
		)}](${url})`;

		// make each formatted score from our lighthouse properties
		const performanceScore = formatScore(summary.performance);
		const accessibilityScore = formatScore(summary.accessibility);
		const bestPracticesScore = formatScore(summary['best-practices']);
		const seoScore = formatScore(summary.seo);

		// create the markdown table row
		return `${shortPreviewLink} | ${performanceScore} | ${accessibilityScore} | ${bestPracticesScore} | ${seoScore} | [🔗](${links[url]})`;
	});

	// join the header and  the rows together
	const finalResults = [...header, ...urlResults].join('\n');

	// return our output to the github action
	core.setOutput('comment', finalResults);
};
