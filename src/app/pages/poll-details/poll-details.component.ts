import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Poll } from 'src/app/models/poll';
import { PollService } from 'src/app/services/poll.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.scss'],
})
export class PollDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private pollService: PollService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  poll: Poll;
  selectedOptionId: string;
  showResults: boolean = false;
  isPopoverOpen: boolean = false;
  savedPollSub: Subscription;
  actionsTexts = ['Edit Poll', 'Delete Poll', 'Duplicate Poll'];
  actionsIcons = ['pi pi-pencil', 'pi pi-trash', 'pi pi-clone'];

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      // Get current poll data from poll resolver
      this.poll = data.poll;
      console.log(this.poll)
    });
    this.userService.getUserData();
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
    this.savedPollSub = this.pollService
      .addVote(this.poll, formValue.option)
      .subscribe();
  }

  onSettingsClick(ev) {
    ev.stopPropagation();
    this.isPopoverOpen = !this.isPopoverOpen;
  }

  onActionClick(actionType) {
    if (actionType === 'Edit Poll') {
      this.router.navigate(['edit'], {relativeTo: this.route})
    } else if (actionType === 'Delete Poll') {
      this.pollService.remove(this.poll._id).subscribe(() => {this.router.navigateByUrl('/poll')}) // TODO: Add a confirm modal
    } else {
      // Do Something...
    }
  }

  closePopover() {
    if (this.isPopoverOpen) this.isPopoverOpen = false;
  }
  ngOnDestroy() {
    if (this.savedPollSub) this.savedPollSub.unsubscribe();
  }
}
