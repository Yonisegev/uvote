import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  loggedInUser: User;
  userSub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userSub = this.userService.loggedInUser$.subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  onLogout(): void {
    this.userService.logout();
  }
}
