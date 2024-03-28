import { Route, provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { EmptyComponent } from './empty.component';

const routes: Route[] = [
  {
    path: 'angular',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'dashboard',
    component: EmptyComponent,
  },
];
export const appRouting = [provideRouter(routes)];
