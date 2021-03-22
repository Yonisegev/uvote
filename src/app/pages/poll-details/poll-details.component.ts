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
import { Subscription } from 'rxjs';

@Component({
  selector: 'poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.scss'],
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

  getCreatedTime(): string {
    return moment(this.poll.createdAt).fromNow();
  }

  getOptionPrecent(optionVotes) {
    const precent = (optionVotes / this.poll.totalVotes) * 100;
    return parseFloat('' + precent).toFixed(2); // Still need to decide which one is better
    // return Math.floor(precent);
  }

  onSubmitVote(formValue) {
    this.pollService.addVote(this.poll, formValue.option);
  }
}
