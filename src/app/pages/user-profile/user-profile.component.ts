import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private titleService: Title,
    private userService: UserService
  ) {}

  user: User;
  totalPolls: number;
  pageNumber: number = 1;
  destroy$: Subject<boolean> = new Subject<boolean>();
  ngOnInit(): void {
    this.router.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.pageNumber = +params.page || 1;
      });
    this.getUser();
    this.titleService.setTitle(`${this.user.name} | Uvote`);
  }

  getUser() {
    this.router.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.user = data.user.user;
      this.totalPolls = data.user.total;
    });
  }

  handlePageChange({ ev, sortBy }) {
    this.pageNumber = ev;
    this.userService
      .getById(this.user._id, this.pageNumber, sortBy)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        this.user = res.user;
        this.totalPolls = res.total;
      });
  }

  get listTitle() {
    return `Public polls made by ${this.user.name}`;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
