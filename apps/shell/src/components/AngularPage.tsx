import * as React from 'react';
const str = 'angular-app';
(await import(/* @vite-ignore */ str)).default;

interface DashboardProps {}

export const AngularPage: React.FC<DashboardProps> = () => {
  return <angular-app></angular-app>;
};
