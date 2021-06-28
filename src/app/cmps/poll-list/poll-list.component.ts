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
  options = [{ name: 'Newest' }, { name: 'Popularity' }];
  sortBy = { name: 'Newest' };
  ngOnInit(): void {
    this.r.queryParams.subscribe((params) => {
      if(params.sort) {
        this.sortBy.name = params?.sort?.charAt(0).toUpperCase() + params?.sort?.slice(1)
      }
    });
    this.query(this.currPage)
  }

  query(ev: number = this.currPage) {
    const sortBy = this.sortBy.name.toLowerCase();
    const params: Params = { page: +ev, sort: sortBy };
    this.router.navigate([], { relativeTo: this.r, queryParams: params });
    this.onPageChange.emit({ ev, sortBy });
  }

  trackByFunc(i, poll) {
    return poll._id || i;
  }
}
