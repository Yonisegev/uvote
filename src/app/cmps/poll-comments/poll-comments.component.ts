import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
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
  constructor(private pollService: PollService) { }
  commentValue: string;
  error: boolean = false;
  page: number = 1;
  @Input() poll: Poll;
  @Output() updatePoll = new EventEmitter(true);

  ngOnInit(): void { }

  onCommentPost() {
    if (!this.commentValue || !this.commentValue.trim()) {
      this.error = true;
      return
    }
    const pollCopy = cloneDeep(this.poll);
    this.pollService
      .addComment(this.commentValue, pollCopy)
      .subscribe((updatedPoll) => this.updatePoll.emit(updatedPoll));
    this.error = false;
    this.commentValue = '';
  }

  getCommentDate(comment: Comment) {
    const created = moment(comment.createdAt);
    return created.from(Date.now());
  }

  getUserProfileLink(id) {
    return `#/u/${id}?page=1&sort=newest`
  }

  handlePageChange(ev: any) {
    this.page = ev;
  }

}
