import * as React from "react";
const str = "vue-app";
(await import(/* @vite-ignore */ str)).default;

interface VuePageProps {}

export const VuePage: React.FC<VuePageProps> = () => {
  return <vue-app></vue-app>;
};
