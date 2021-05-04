import { Component, Input, OnInit } from '@angular/core';
import { Poll } from 'src/app/models/poll';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'poll-preview',
  templateUrl: './poll-preview.component.html',
  styleUrls: ['./poll-preview.component.scss'],
})
export class PollPreviewComponent implements OnInit {
  @Input() poll: Poll;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getCreatedTime() {
    return moment(this.poll.createdAt).fromNow();
  }

  pollVotesToShow() {
    const pollVotes = this.poll.totalVotes
    if(!pollVotes) return 0
    else if(pollVotes > 1000) return '1k+'
    else if(pollVotes > 99) return '99+'
    else return pollVotes
  }

  onPreviewClick() {
    this.router.navigateByUrl(`/poll/${this.poll._id}`);
  }
}
