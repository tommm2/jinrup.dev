const { withContentlayer } = require('next-contentlayer');
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
		];
	},
};

const ContentSecurityPolicy = `
	default-src 'self';
	script-src 'self' 'unsafe-inline' 'unsafe-eval' giscus.app *.tomjin.vercel.app vercel.live;
	style-src 'self' 'unsafe-inline';
	img-src * blob: data:;
	font-src 'self' assets.vercel.com fonts.gstatic.com;
	object-src 'none';
	base-uri 'self';
	form-action 'self';
	connect-src *;
	media-src 'self';
	frame-ancestors 'none';
	frame-src giscus.app vercel.live;
	block-all-mixed-content;
	upgrade-insecure-requests;
	worker-src blob:;
`;

const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\n/g, ''),
	},
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin',
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains; preload',
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()',
	},
];

module.exports = withNextIntl(withContentlayer(nextConfig));
