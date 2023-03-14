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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router : Router
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
    console.log(this.loginForm.value);
    this.loginForm.value.email, this.loginForm.value.password;

    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);

    const loginModel = new LoginModel(
      this.loginForm.value.email,
      this.loginForm.value.password
    );

    console.log(loginModel);

    this.authService.login(loginModel).subscribe((res) => {
      console.log(res, '::', 'login component response');
      if (res['statusCode'] === 200) {  
        localStorage.setItem('token', res['data']['token']);
        localStorage.setItem('username', res['data']['username']);
        this.showSuccess();
        this.router.navigate(['/dashboard']);

      }
    });

    this.loginForm.reset();
    
  }

  public showSuccess(): void {
    this.toastrService.success('User Login successfully!', 'Success');
  }
}
