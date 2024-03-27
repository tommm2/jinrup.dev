const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	output: 'export',
};

module.exports = withNextIntl(nextConfig);
