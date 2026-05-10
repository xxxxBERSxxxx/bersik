
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
};

module.exports = {
 output: 'standalone', 
  distDir: '.next',
  images: {
    unoptimized: true, // Отключает серверную оптимизацию изображений
  },
}