import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Poll } from 'src/app/models/poll';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'poll-app',
  templateUrl: './poll-app.component.html',
  styleUrls: ['./poll-app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PollAppComponent implements OnInit, OnDestroy {
  constructor(
    private pollService: PollService,
    private titleService: Title,
    private route: ActivatedRoute
  ) {}
  polls$: Observable<Poll[]>;
  destroy$: Subject<boolean> = new Subject<boolean>();
  pageNumber: number;
  totalItems: number;
  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.pageNumber = +params.page || 1;
      });
    this.pollService.query(this.pageNumber);
    this.getPolls();
    this.pollService.totalPollsCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe((total) => (this.totalItems = total));
    this.titleService.setTitle('Discover Polls | Uvote');
  }

  onPageChange({ ev, sortBy }) {
    this.pageNumber = ev;
    this.pollService.query(this.pageNumber, sortBy);
  }

  getPolls() {
    this.polls$ = this.pollService.polls$;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
