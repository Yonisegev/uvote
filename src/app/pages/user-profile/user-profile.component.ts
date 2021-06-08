import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  user: User
  ngOnInit(): void {
    this.router.data.subscribe(data => {
      this.user = data.user
      console.log(this.user)
    } )
  }

  get listTitle() {
    return `Polls made by ${this.user.name}`
  }
}
