import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  sideNavStatus : boolean = true;

  //  openNav() {
  //   document.getElementById("mySidebar").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  // }
  
  //  closeNav() {
  //   document.getElementById("mySidebar").style.width = "0";
  //   document.getElementById("main").style.marginLeft= "0";
  // }

}
