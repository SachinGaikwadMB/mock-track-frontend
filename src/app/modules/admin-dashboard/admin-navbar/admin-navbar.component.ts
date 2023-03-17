import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss'],
})
export class AdminNavbarComponent {
  @Output() sideNavBarToggle = new EventEmitter<boolean>();
   menuStatus : boolean = false;


  sideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavBarToggle.emit(this.menuStatus);
  }
}
