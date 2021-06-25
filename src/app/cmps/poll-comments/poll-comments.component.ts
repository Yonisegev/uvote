import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Poll } from 'src/app/models/poll';
import { PollService } from 'src/app/services/poll.service';
import * as moment from 'moment';
import { cloneDeep } from 'lodash';
import { Comment } from 'src/app/models/comment';

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
  @Input() onUpdatePoll: any;

  ngOnInit(): void {}

  onCommentPost() {
    if (!this.commentValue) this.error = true;
    const pollCopy = cloneDeep(this.poll);
    this.pollService
      .addComment(this.commentValue, pollCopy)
      .subscribe((updatedPoll) => this.onUpdatePoll(updatedPoll));
    this.error = false;
    this.commentValue = '';
  }

  getCommentDate(comment: Comment) {
    const created = moment(comment.createdAt);
    return created.from(Date.now());
  }

  handlePageChange(ev: any) {
    this.page = ev;
  }
}
