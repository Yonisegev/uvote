import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Poll } from 'src/app/models/poll';
import { PollService } from 'src/app/services/poll.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'poll-app',
  templateUrl: './poll-app.component.html',
  styleUrls: ['./poll-app.component.scss'],
})
export class PollAppComponent implements OnInit, OnDestroy {
  constructor(
    private pollService: PollService,
    private userService: UserService
  ) {}
  polls: any;
  pollsSub: Subscription;

  ngOnInit(): void {
    this.getPolls();
  }

  getPolls() {
    this.pollsSub = this.pollService.polls$.subscribe((polls) => {
      this.polls = polls;
    });
    this.pollService.query();
  }

  ngOnDestroy() {
    this.pollsSub.unsubscribe();
  }
}
