import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  loggedInUser: User;
  userSub: Subscription;
  constructor(private userService: UserService, private socialAuthService: SocialAuthService, private router: Router) {}

  ngOnInit(): void {
    this.userSub = this.userService.loggedInUser$.subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  onLogout(): void {
    this.userService.logout();
    this.socialAuthService.signOut()
  }

  discoverNavigate() {
    this.router.navigateByUrl('/poll?page=1&sort=newest')
  }

  get profileLink(): string {
    return `#/u/${this.loggedInUser._id}`
  }

  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
