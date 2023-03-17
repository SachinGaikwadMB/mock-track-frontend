import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent {
 
 @Input() sideNavStatus : boolean = false;

  navItemsList : any[] = [
    {
      'number' : 1,
      'name' : 'dashboard',
      'icon':'fas fa-tachometer-alt',
      'path':''
    },

    {
      'number' : 2,
      'name' : 'quizes',
      'icon':'fas fa-award',
      'path' : 'quizes'
    },
    {
      'number' : 3,
      'name' : 'questions',
      'icon':'fas fa-book-open',
      'path' : 'questions'
    },
    {
      'number' : 4,
      'name' : 'categories',
      'icon':'fas fa-th',
      'path' : 'categories'
    },
    {
      'number' : 5,
      'name' : 'results',
      'icon':'fas fa-chart-bar',
      'path' : 'results'
    }
  ];

}
