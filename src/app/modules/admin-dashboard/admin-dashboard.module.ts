import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { QuizesComponent } from './quizes/quizes.component';
import { QuestionsComponent } from './questions/questions.component';
import { CategoriesComponent } from './categories/categories.component';
import { ResultsComponent } from './results/results.component';
import { AdminSubdashboardComponent } from './admin-subdashboard/admin-subdashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'sub-dashboard',
        component: AdminSubdashboardComponent,
      },

      {
        path: 'quizes',
        component: QuizesComponent,
      },
      {
        path: 'questions',
        component: QuestionsComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'results',
        component: ResultsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminNavbarComponent,
    AdminSidenavComponent,
    QuizesComponent,
    QuestionsComponent,
    CategoriesComponent,
    ResultsComponent,
    AdminSubdashboardComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminDashboardModule {}
