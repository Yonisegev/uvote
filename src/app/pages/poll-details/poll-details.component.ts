import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Poll } from 'src/app/models/poll';
import { PollService } from 'src/app/services/poll.service';
import * as moment from 'moment';
import { Option } from 'src/app/models/option';

@Component({
  selector: 'poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PollDetailsComponent implements OnInit {
  constructor(
    private pollService: PollService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  poll: Poll;
  selectedOptionId: string;
  showResults: boolean = false;

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.poll = data.poll;
    });
  }

  getCreatedTime() {
    return moment(this.poll.createdAt).fromNow();
  }

  onSubmitVote(formValue) {
    console.log(formValue.option);
  }
}
