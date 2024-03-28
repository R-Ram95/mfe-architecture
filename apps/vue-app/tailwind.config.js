const sharedTailwindConfig = "tailwind-config/tailwind.config.js";

export default {
  ...sharedTailwindConfig,
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}', './index.html'],
}