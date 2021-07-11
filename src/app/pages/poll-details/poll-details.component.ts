import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Poll } from 'src/app/models/poll';
import { PollService } from 'src/app/services/poll.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Title } from '@angular/platform-browser';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PollDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private pollService: PollService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private socketService: SocketService
  ) { }
  poll: Poll;
  selectedOptions: string[] = [];
  isPopoverOpen: boolean = false;
  isConfirmModalOpen: boolean = false;
  isVoteModalOpen: boolean = false;
  isDue: boolean = false;
  savedPollSub: Subscription;
  loggedUser: Partial<User>;
  error: string;
  pollSubmitted: boolean = false;
  actionsTexts = ['Edit Poll', 'Delete Poll'];
  actionsIcons = ['pi pi-pencil', 'pi pi-trash'];

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      // Get current poll data from poll resolver
      if (!data.poll) this.router.navigateByUrl('/404');
      this.poll = data.poll;
      this.titleService.setTitle(`${data.poll.title} | Uvote`);
      this.socketService.on('connection')
      this.socketService.emit('join poll', data.poll._id)
    });
    this.userService.getGuestData();
    this.loggedUser = this.userService.loggedUserValue;
    this.dueDateString; // invoked here to avoid erratic UI behavior after CD runs (NG0100)
  }

  ngOnDestroy() {
    if (this.savedPollSub) this.savedPollSub.unsubscribe();
  }

  toggleChecked(optionId: string) {
    const optionIdx = this.selectedOptions.indexOf(optionId);
    if (optionIdx === -1) {
      return false;
    } else return true;
  }

  getCreatedTime(): string {
    return moment(this.poll.createdAt).fromNow();
  }

  getOptionPrecent(optionVotes: number) {
    const precent = (optionVotes / this.poll.totalVotes) * 100;
    if (!precent) return 0;
    return parseFloat('' + precent).toFixed(2);
  }

  onSelectOption(optionId: string) {
    const optionIdx = this.selectedOptions.indexOf(optionId);
    if (this.poll.allowMultiple) {
      if (optionIdx === -1) {
        this.selectedOptions.push(optionId);
      } else {
        this.selectedOptions.splice(optionIdx, 1);
      }
    } else {
      this.selectedOptions = [optionId]
    }
  }

  onSubmitVote() {
    this.pollSubmitted = true
    this.error = ''
    if (!this.selectedOptions.length) {
      this.error = 'Please select at least one option'
      return
    }
    this.savedPollSub = this.pollService
      .addVote(this.poll, [...this.selectedOptions])
      .subscribe(
        (res) => {
          this.isVoteModalOpen = true;
        },
        (err) => {
          this.error = 'You have already voted on this poll.';
        }
      );
    this.pollSubmitted = false
  }

  onSettingsClick(ev: HTMLFormElement) {
    ev.stopPropagation();
    this.isPopoverOpen = !this.isPopoverOpen;
  }

  onActionClick(actionType: string) {
    if (actionType === 'Edit Poll') {
      this.router.navigate(['edit'], { relativeTo: this.route });
    } else if (actionType === 'Delete Poll') {
      this.isConfirmModalOpen = true;
    } else {
      // Do Something...
    }
  }

  onPollDelete(ev: any) {
    if (ev) {
      this.pollService.remove(this.poll._id).subscribe(() => {
        this.router.navigateByUrl('/poll');
      });
    }
    this.isConfirmModalOpen = false;
  }

  updatePoll(updatedPoll: Poll) {
    this.poll = updatedPoll;
  }

  closePopover() {
    if (this.isPopoverOpen) this.isPopoverOpen = false;
    if (this.isVoteModalOpen) this.isVoteModalOpen = false;
  }

  getOptionName(idx: number) {
    if (this.poll.allowMultiple) {
      return `option${idx}`;
    } else {
      return 'option';
    }
  }

  get resultsLink() {
    return `/poll/${this.poll._id}/results`;
  }

  get userProfileLink() {
    if (this.poll.owner._id === 'guest') {
      return '';
    } else {
      return `/#/u/${this.poll.owner._id}`;
    }
  }

  get pollUserHtmlString() {
    if (this.poll.owner._id === 'guest') {
      return `by a guest · <span>${this.getCreatedTime()}</span>`;
    } else {
      return `by <a routerLink="${this.userProfileLink}" href="${this.userProfileLink
        }">${this.poll.owner.name}</a> · <span>${this.getCreatedTime()}</span>`;
    }
  }

  get dueDateString() {
    if (this.poll.dueDate) {
      const dueDate = new Date(this.poll.dueDate);
      const now = new Date(Date.now());
      const formattedDueDate = moment(this.poll.dueDate).fromNow();
      if (dueDate > now) {
        return `Voting ends ${formattedDueDate}.`;
      } else {
        this.isDue = true;
        return `Voting ended ${formattedDueDate}.`;
      }
    }
  }
}
