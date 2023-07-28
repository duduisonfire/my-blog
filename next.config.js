/** @type {import('next').NextConfig} */
const nextConfig = {
	env: { BackEndApi: 'http://localhost:5029' },
	images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },
};

module.exports = nextConfig;
