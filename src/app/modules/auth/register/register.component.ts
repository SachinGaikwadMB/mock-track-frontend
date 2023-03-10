import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/shared/Model/user-model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ConfirmPasswordValidator } from 'src/app/shared/validators/confirm-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.formOnInit();
  }

  public formOnInit() {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: ConfirmPasswordValidator('password', 'confirmPassword'),
      }
    );
  }

  public register() {
    const userModel = new UserModel(
      this.registerForm.value.name,
      this.registerForm.value.email,
      this.registerForm.value.mobile,
      this.registerForm.value.password,
      this.registerForm.value.confirmPassword
    );

    this.authService.registerUser(userModel).subscribe({
      next: (resp: any) => {
        console.log(resp);
      },
      error: (error) => {
        console.log('error', error);
      },
    });

    this.registerForm.reset('');
    this.showSuccess();
  }

  public showSuccess(): void {
    this.toastrService.success('User Register successfully!', 'Success');
  }

  public showInfo(): void {
    this.toastrService.info('Message Info!', 'Title Info!');
  }

  public showWarning(): void {
    this.toastrService.warning('Message Warning!', 'Title Warning!');
  }

  public showError(): void {
    this.toastrService.error('Message Error!', 'Title Error!');
  }
}
