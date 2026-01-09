/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== Enables static export
  images: {
    unoptimized: true, // <=== Required for images to show on GitHub Pages
  },
  // If you are deploying to https://<your-username>.github.io/<repo-name>,
  // uncomment the line below and replace <repo-name> with your repository name:
  // basePath: "/repo-name",
};

export default nextConfig;