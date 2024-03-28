const sharedTailwindConfig = "tailwind-config/tailwind.config.js";

export default {
  ...sharedTailwindConfig,
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
}