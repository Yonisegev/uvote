import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Poll } from 'src/app/models/poll';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'poll-app',
  templateUrl: './poll-app.component.html',
  styleUrls: ['./poll-app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PollAppComponent implements OnInit, OnDestroy {
  constructor(private pollService: PollService) {}
  polls: Poll[];
  pollsSub: Subscription;
  page: number = 1;
  paginatorSize: number = 5;
  totalItems: number;
  options = [{ name: 'Newest' }, { name: 'Popularity' }];
  sortBy = { name: 'Newest' };
  ngOnInit() {
    this.pollService.query();
    this.getPolls();
  }

  getPolls() {
    this.pollsSub = this.pollService.polls$.subscribe((polls) => {
      this.polls = polls;
      this.sortPolls();
    });
  }

  sortPolls(sortBy = 'Newest') {
    if (sortBy === 'Newest') {
      this.polls = this.polls.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
    } else if (sortBy === 'Popularity') {
      this.polls = this.polls.sort((a, b) => {
        return b.totalVotes - a.totalVotes;
      });
    }
  }

  // polls.sort((a, b): number => {
  //   if (a.createdAt < b.createdAt) return 1;
  //   if (a.createdAt > b.createdAt) return -1;
  // });
  ngOnDestroy() {
    this.pollsSub.unsubscribe();
  }

  handlePageChange(ev) {
    this.page = ev;
    this.getPolls();
  }
}
