import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedInUser: boolean = false;
  loggedUsername: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.retriveNameFromEmail();
    this.assignIsLoggedUser();
  }

  public assignIsLoggedUser() {
    const token = this.authService.getJwtToken();
    if (token !== null) {
      this.isLoggedInUser = true;
    }
  }

  public retriveNameFromEmail() {
    var email = localStorage.getItem('username');
    if (email !== null) {
      this.loggedUsername = email.split('@')[0].split('.').toString();
    }
  }

  public logout() {
    this.authService.logout();
  }
}
