const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	experimental: {},
};

module.exports = withNextIntl(nextConfig);
