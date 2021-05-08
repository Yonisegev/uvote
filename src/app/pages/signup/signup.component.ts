import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { cloneDeep } from 'lodash';
import { Router } from '@angular/router';



@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
  signupForm: FormGroup
  submitted: boolean = false
  showPassword: boolean = false
  ngOnInit(): void {
    this.userService.getUserData()
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', {validators: [Validators.required, Validators.email], asyncValidators: this.userService.emailValidator(), updateOn: 'blur'}],
      password: ['', Validators.required]
    })
  }

  onTogglePassword(): void {
    this.showPassword = !this.showPassword
  }

  onSignup() {
    this.submitted = true
    if(!this.signupForm.valid) return
    const formToSubmit = cloneDeep(this.signupForm.value)
    this.userService.registerUser(formToSubmit).subscribe() // TODO: Save userdata to behaviorsubject so it will be available to all components
    this.submitted = false
    this.router.navigateByUrl('poll')
  }



}
