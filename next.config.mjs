import createNextIntlPlugin from "next-intl/plugin";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	images: {
		deviceSizes: [320, /*375, 480,*/ 600, 768 /*924, 1272, 1600, 1920*/],
		formats: ['image/avif', 'image/webp'],
		// minimumCacheTTL: 60 * 60 * 24 * 365, // One year
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
