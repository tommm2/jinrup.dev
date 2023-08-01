const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
