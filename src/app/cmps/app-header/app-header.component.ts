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
  isMenuOpen: boolean = false;
  constructor(
    private userService: UserService,
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSub = this.userService.loggedInUser$.subscribe((user) => {
      this.loggedInUser = user;
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout(): void {
    this.userService.logout();
    this.socialAuthService.signOut();
  }

  discoverNavigate() {
    this.router.navigateByUrl('/poll?page=1&sort=newest');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  closeMenu() {
    this.isMenuOpen = false
  }

  get profileLink(): string {
    return `#/u/${this.loggedInUser._id}`;
  }
}
