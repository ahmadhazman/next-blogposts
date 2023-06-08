/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: true,;
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/ahmadhazman/test-blogpost/main/images/**',
			},
		],
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
}

module.exports = nextConfig
