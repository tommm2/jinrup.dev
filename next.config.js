const { withContentlayer } = require('next-contentlayer');
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
};

module.exports = withNextIntl(withContentlayer(nextConfig));
