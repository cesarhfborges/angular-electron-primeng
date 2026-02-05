import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Home} from '@/app/pages/home/home';

const routes: Routes = [
  {
    path: 'home',
    component: Home
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
