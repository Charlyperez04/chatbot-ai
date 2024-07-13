/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images:{
        remotePatterns:[
            {
                protocol: 'http',
                hostname: '54.214.173.31'
            }
        ]
    }
};

export default nextConfig;
