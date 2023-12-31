/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['https://news.ycombinator.com'],
    },
    rewrites: async () => [
        {
            source: '/:category',
            destination: '/',
        },
    ],
};

module.exports = nextConfig;
