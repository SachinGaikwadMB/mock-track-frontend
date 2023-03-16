import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./modules/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path:'dashboard',
    loadChildren : () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
  }
  , 
  {
    path:'admin',
    loadChildren:() => import('./modules/admin-dashboard/admin-dashboard.module').then((m)=> m.AdminDashboardModule)
  }

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
