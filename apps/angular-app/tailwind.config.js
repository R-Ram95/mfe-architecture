const sharedTailwindConfig = "tailwind-config/tailwind.config.js";

export default {
  ...sharedTailwindConfig,
  content: ['./src/**/*.{ts,html}', './index.html'],
}