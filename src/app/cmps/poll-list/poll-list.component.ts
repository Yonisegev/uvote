import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Poll } from 'src/app/models/poll';

@Component({
  selector: 'poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PollListComponent implements OnInit {
  constructor() {}
  @Input() polls: Poll[];
  @Input() listTitle: string;
  @Input() paginatorSize: number = 5;
  pollsToDisplay: Poll[];
  page: number = 1;
  // paginatorSize: number = 5;
  totalItems: number;
  options = [{ name: 'Newest' }, { name: 'Popularity' }];
  sortBy = { name: 'Newest' };
  ngOnInit(): void {
    this.sortPolls();
  }
  
  ngOnChanges() {
    this.sortPolls()
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

  handlePageChange(ev) {
    this.page = ev;
  }
}
