import {Routes} from '@angular/router';
import {FullLayout} from '@/app/shared/layouts/full-layout/full-layout';
import {BasicLayout} from '@/app/shared/layouts/basic-layout/basic-layout';
import {PageNotFound} from '@/app/auth/page-not-found/page-not-found';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayout,
    loadChildren: () => import('./pages/pages-module').then(m => m.PagesModule),
  },
  {
    path: '',
    component: BasicLayout,
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule),
  },
  {
    path: '**',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: PageNotFound
      }
    ]
  }
];
