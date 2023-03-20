import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';


const routes : Routes = [
  {
    path:'', component:HomeComponent
  },

]


@NgModule({
  declarations: [
    HomeComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class HomepageModule { }
