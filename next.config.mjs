/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.mux.com" },
    ],
  },
  turbopack: {
    root: import.meta.dirname,
  },
  agentRules: false,
};

export default nextConfig;
