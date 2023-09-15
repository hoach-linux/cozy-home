/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "directus.hoachnt.com",
                port: "",
                pathname: "/assets/**",
            },
        ],
    },
};

module.exports = nextConfig;
