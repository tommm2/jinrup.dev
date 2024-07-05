import withNextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	i18n: null,
};

export default withNextIntl('./src/i18n.ts')(nextConfig);
