import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

const routes : Routes = [
  {
    path:'',
    component:AdminDashboardComponent
  }
]


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminDashboardModule { }
