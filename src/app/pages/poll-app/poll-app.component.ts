import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Poll } from 'src/app/models/poll';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'poll-app',
  templateUrl: './poll-app.component.html',
  styleUrls: ['./poll-app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PollAppComponent implements OnInit {
  constructor(private pollService: PollService, private titleService: Title, private route: ActivatedRoute) {}
  polls$: Observable<Poll[]>
  pollsSub: Subscription;
  pageNumber: number = 1
  routeSub: Subscription
  totalSub: Subscription
  totalItems: number
  ngOnInit() {
    this.routeSub = this.route.queryParams.subscribe((params) => {
      this.pageNumber = params.page
    })
    this.pollService.query(this.pageNumber);
    this.getPolls();
    this.totalSub = this.pollService.totalPollsCount$.subscribe((total => this.totalItems = total))
    this.titleService.setTitle('Discover Polls | Uvote')
  }

  onPageChange(page) {
    this.pageNumber = page
    this.pollService.query(this.pageNumber)
    this.getPolls()
  }

  getPolls() {
    this.polls$ = this.pollService.polls$
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe()
    this.totalSub?.unsubscribe()
  }
}
