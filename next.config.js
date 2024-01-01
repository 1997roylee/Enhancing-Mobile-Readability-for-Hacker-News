/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['https://news.ycombinator.com'],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
};

module.exports = nextConfig;
