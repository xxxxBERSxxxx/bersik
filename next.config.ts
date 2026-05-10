import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Отключаем встроенную оптимизацию изображений, так как Netlify не поддерживает её "из коробки"
  // без дополнительных танцев с бубном. Картинки будут отдаваться как есть.
  images: {
    unoptimized: true,
  },
  // Эта настройка важна для Netlify. Она говорит Next.js собирать проект
  // в автономный пакет, который Netlify-плагин развернет правильно.
  output: 'standalone',
};

export default nextConfig;