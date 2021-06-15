import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { cloneDeep } from 'lodash';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}
  signupForm: FormGroup;
  submitted: boolean = false;
  showPassword: boolean = false;

  ngOnInit(): void {
    if (this.userService.loggedUserValue) {
      this.router.navigate(['/poll']);
    }
    this.userService.getGuestData();
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: this.userService.emailValidator(),
          updateOn: 'blur',
        },
      ],
      password: ['', Validators.required],
    });

    this.socialAuthService.authState.subscribe(googleUser => {
      const userToSignup = {
        name: googleUser.name,
        email: googleUser.email,
        password: googleUser.idToken
      }
      this.onSignup(userToSignup)
    })
  }

  onTogglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSignup(socialUser = null) {
    this.submitted = true;
    if(socialUser) {
      this.userService.socialRegister(socialUser)
    } else {
      if (!this.signupForm.valid) return;
      const formToSubmit = cloneDeep(this.signupForm.value);
      this.userService.registerUser(formToSubmit);
    }
      this.submitted = false;
      this.router.navigateByUrl('poll');
  }

  onGoogleSignUp() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
}
