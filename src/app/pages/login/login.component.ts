import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  socialUser: SocialUser;
  showPassword: boolean = false;
  submitted: boolean = false;
  error = '';
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.socialAuthService.authState.subscribe((googleUser) => {
      const userToSignIn = {
        email: googleUser.email,
        password: googleUser.idToken,
      };
      this.onLogin(userToSignIn);
    });
  }

  onLogin(socialUser = null) {
    this.submitted = true;
    if (!socialUser && !this.loginForm.valid) return;
    this.userService.login(socialUser || this.loginForm.value).subscribe(
      (loggedUser) => {
        this.userService.updateLoggedUser(loggedUser);
        this.router.navigateByUrl('poll')
      },
      (err) => {
        if(err.status === 401) {
          this.error = 'Invalid email/password'
        } else {
          this.error = 'An error occurred. Please try again.';
        }
      }
    );

    this.submitted = false;
  }

  onTogglePassword() {
    this.showPassword = !this.showPassword;
  }

  onGoogleSignin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
