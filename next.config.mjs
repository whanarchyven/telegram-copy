/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: Boolean(Number(process.env.UNOPTIMIZED_IMAGES)),
        deviceSizes: [767, 980, 1156, 1400, 1920],
        formats: ['image/webp'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

export default nextConfig;
