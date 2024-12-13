import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home/recommendations',
                permanent: true,
            },
            {
                source: '/home',
                destination: '/home/recommendations',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
