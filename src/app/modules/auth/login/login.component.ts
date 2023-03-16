import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/shared/Model/login-model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean;
  isErrorOccured: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formOnInit();
  }

  formOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
   
    const loginModel = new LoginModel(
      this.loginForm.value.email,
      this.loginForm.value.password
    );

    this.authService.login(loginModel).subscribe({
      next: (res) => {
        console.log(res, '::', 'login component response');
        if (res['statusCode'] === 200) {
          localStorage.setItem('token', res['data']['token']);
          localStorage.setItem('username', res['data']['username']);
          this.showSuccess();
          this.router.navigate(['/dashboard']);
          
          if (res['statusCode'] === 500) {
            this.isErrorOccured = true;
          }
        }
      },
      error: (error) => {
        this.isErrorOccured = true;
        
      },
    });

    this.loginForm.reset();
  }

  public showSuccess(): void {
    this.toastrService.success('User Login successfully!', 'Success');
  }
}
