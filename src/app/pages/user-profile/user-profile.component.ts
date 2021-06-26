import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
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
        this.pageNumber = params.page;
      });
    this.getUser();
    this.titleService.setTitle(`${this.user.name} | Uvote`);
  }

  getUser() {
    this.router.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      console.log(data);
      this.user = data.user.user;
      this.totalPolls = data.user.total;
    });
  }

  handlePageChange(pageNumber) {
    this.pageNumber = pageNumber;
    this.userService
      .getById(this.user._id, this.pageNumber)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        console.log('res', res);
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
