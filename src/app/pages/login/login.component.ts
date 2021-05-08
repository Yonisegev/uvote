import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  socialUser: SocialUser;
  isLoggedIn: boolean;
  error: Error
  constructor(
    private fb: FormBuilder,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    })

    this.socialAuthService.authState.subscribe(user => {
      this.socialUser = user
      this.isLoggedIn = (user != null)
      console.log('social user', this.socialUser)
    }, err => this.error = err)
  }

  onGoogleSignin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }

  onLogout() {
    this.socialAuthService.signOut()
  }
}
