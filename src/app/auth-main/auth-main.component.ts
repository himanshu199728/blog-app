import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.scss']
})
export class AuthMainComponent implements OnInit {
  user: FormGroup;
  actionName: any = 'Signup';
  isSignUpPage = true;
  otherAction = 'Already have account?';
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.user = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
      age: new FormControl('')
    });
  }

  async onUserAction(): Promise<void> {
    let result;
    switch (this.isSignUpPage) {
      case true:
        result = await this.onSignUp();
        break;
      case false:
        result = await this.onLogin();
        break;
    }
  }

  async onSignUp(): Promise<void> {
    const data = {
      email_id: this.user.value.email,
      password: this.user.value.password,
      age: parseInt(this.user.value.age, 10),
      name: this.user.value.name
    };

    return await this.userService.signUp(data)
      .then((res) => {
        console.log(res);
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  async onLogin(): Promise<void> {
    const data = {
      email_id: this.user.value.email,
      password: this.user.value.password,
    };

    return await this.userService.login(data)
      .then((res) => {
        if (res.success) {
          localStorage.setItem('access_token', res.access_token);
          localStorage.setItem('user_id', res.data.user.id);
          localStorage.setItem('email_id', res.data.user.email);
          this.route.navigate(['/home']);
        }
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  changeAction(): void {
    this.isSignUpPage = !this.isSignUpPage;
    this.actionName = this.actionName === 'Signup' ? 'Login' : 'Signup';
    this.otherAction = this.isSignUpPage ? 'Already have account?' : 'Create new Account';
  }
}
