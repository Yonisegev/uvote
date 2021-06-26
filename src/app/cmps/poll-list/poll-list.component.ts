import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Poll } from 'src/app/models/poll';

@Component({
  selector: 'poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PollListComponent implements OnInit {
  constructor(private router: Router, private r: ActivatedRoute) {}
  @Input() polls: Poll[];
  @Input() listTitle: string;
  @Input() paginatorSize: number = 5;
  @Input() currPage: number = 1;
  @Input() totalItems: number = 100;
  @Output() onPageChange = new EventEmitter();
  pollsToDisplay: Poll[];
  options = [{ name: 'Newest' }, { name: 'Popularity' }];
  sortBy = { name: 'Newest' };
  ngOnInit(): void {
    this.sortPolls();
  }

  ngOnChanges() {
    this.sortPolls();
  }

  sortPolls(sortBy = 'Newest') {
    console.log('inside sortpolls by', sortBy);
    if (sortBy === 'Newest') {
      this.pollsToDisplay = this.polls.slice().sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
    } else if (sortBy === 'Popularity') {
      this.pollsToDisplay = this.polls.slice().sort((a, b) => {
        return b.totalVotes - a.totalVotes;
      });
    }
  }

  handlePageChange(ev: number) {
    const params: Params = { page: ev };
    this.router.navigate([], { relativeTo: this.r, queryParams: params });
    this.onPageChange.emit(ev);
  }

  trackByFunc(i, poll) {
    return poll._id || i;
  }
}
