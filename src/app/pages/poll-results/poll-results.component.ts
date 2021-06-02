import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Poll } from 'src/app/models/poll';

@Component({
  selector: 'poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.scss'],
})
export class PollResultsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  poll: Poll;
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (!data.poll) this.router.navigateByUrl('/404');
      this.poll = data.poll;
      console.log(this.poll, 'from results');
    });
  }
}
