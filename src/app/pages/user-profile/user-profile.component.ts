import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(private router: ActivatedRoute, private titleService: Title) {}

  user: User;
  ngOnInit(): void {
    this.router.data.subscribe((data) => {
      this.user = data.user;
      this.titleService.setTitle(`${data.user.name} | Uvote`);
    });
  }

  get listTitle() {
    return `Public polls made by ${this.user.name}`;
  }
}
