import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { GuidelinesComponent } from './dashboard/guidelines/guidelines.component';
import { LearnComponent } from './dashboard/learn/learn.component';
import { TestComponent } from './dashboard/test/test.component';
import { TrackComponent } from './dashboard/track/track.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },

  {
    path: 'user',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'performace',
        component: UserDashboardComponent,
      },
      {
        path: 'guidelines',
        component: GuidelinesComponent,
      },

      {
        path: 'learn',
        component: LearnComponent,
      },

      {
        path: 'test',
        component: TestComponent,
      },
      {
        path: 'track',
        component: TrackComponent,
      },
    ],
  },
];

const componentsCommon = [
  DashboardComponent,
  GuidelinesComponent,
  LearnComponent,
  TestComponent,
  TrackComponent,
];

@NgModule({
  declarations: [componentsCommon, UserDashboardComponent],
  imports: [CommonModule, CoreModule, RouterModule.forChild(routes)],
  exports: [componentsCommon],
})
export class DashboardModule {}
