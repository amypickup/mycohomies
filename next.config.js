/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
  },
};

module.exports = nextConfig;
