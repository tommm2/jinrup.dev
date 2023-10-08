const { withContentlayer } = require('next-contentlayer');
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
};

module.exports = withNextIntl(withContentlayer(nextConfig));
