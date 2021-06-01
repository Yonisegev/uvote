import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Poll } from 'src/app/models/poll';
import { PollService } from 'src/app/services/poll.service';
import * as moment from 'moment';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'poll-comments',
  templateUrl: './poll-comments.component.html',
  styleUrls: ['./poll-comments.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PollCommentsComponent implements OnInit {
  constructor(private pollService: PollService) {}
  commentValue: string;
  error: boolean = false;
  page: number = 1;
  @Input() poll: Poll;
  @Input() onUpdatePoll;

  ngOnInit(): void {}

  onCommentPost() {
    if (!this.commentValue) this.error = true;
    const pollCopy = cloneDeep(this.poll);
    this.pollService
      .onCommentSubmit(this.commentValue, pollCopy)
      .subscribe((updatedPoll) => this.onUpdatePoll(updatedPoll));
    this.error = false;
    this.commentValue = '';
  }

  getCommentDate(comment) {
    const created = moment(comment.createdAt);
    return created.from(Date.now());
  }

  handlePageChange(ev) {
    this.page = ev;
  }
}
