import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  constructor(private pollService: PollService, private titleService: Title) {}
  polls: Poll[];
  pollsSub: Subscription;
  ngOnInit() {
    this.pollService.query();
    this.getPolls();
    this.titleService.setTitle('Discover Polls | Uvote')
  }

  getPolls() {
    this.pollsSub = this.pollService.polls$.subscribe((polls) => {
      console.log('inside getpolls')
      this.polls = polls;
    });
  }

  ngOnDestroy() {
    this.pollsSub.unsubscribe();
  }
}
