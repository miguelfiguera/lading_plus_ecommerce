/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },images: {
    domains: ['media.gettyimages.com','placekitten.com','placehold.co'],
  },
};

export default nextConfig;
