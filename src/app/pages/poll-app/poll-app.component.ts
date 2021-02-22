import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from 'src/app/models/poll';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'poll-app',
  templateUrl: './poll-app.component.html',
  styleUrls: ['./poll-app.component.scss'],
})
export class PollAppComponent implements OnInit {
  constructor(private pollService: PollService) {}
  polls$: Observable<Poll[]>;

  ngOnInit(): void {
    this.polls$ = this.pollService.polls$;
    this.pollService.query();
  }
}
