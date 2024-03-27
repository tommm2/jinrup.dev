const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	experimental: {
		// Removes the warning regarding the WebPack Build Worker
		webpackBuildWorker: false,
	},
};

module.exports = withNextIntl(nextConfig);
