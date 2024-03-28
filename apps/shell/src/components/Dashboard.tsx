import * as React from "react";
const str = "react-app";
(await import(/* @vite-ignore */ str)).default;

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  return <react-app></react-app>;
};
