import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  private errorMessage: string = '';
  private userServices = inject(AuthService);
  private router = inject(Router);
  private state: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[^<>()\[\]\.,;:\s@'"]+@(([^<>()\[\]\.,;:\s@'"]+\.)+[^<>()\[\]\.,;:\s@'"]{2,}|(\[([0-9]{1,3}\.){3}[0-9]{1,3}\]))$/
          ),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    try {
      const response = await this.userServices.loginUser(this.loginForm.value);
      this.state = false;
      localStorage.setItem('token', response.token);
      this.router.navigate(['']);
    } catch (error: any) {
      this.state = true;
      this.errorMessage = error.error.fatal;
      console.log(error.error.fatal);
    }
  }
  getState(): Boolean {
    return this.state;
  }
  getMessageError(): string {
    return this.errorMessage;
  }
}
