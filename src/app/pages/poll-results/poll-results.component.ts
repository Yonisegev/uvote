import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Poll } from 'src/app/models/poll';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.scss'],
})
export class PollResultsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  poll: Poll;
  data: any;
  options: any;
  colors;
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (!data.poll) this.router.navigateByUrl('/404');
      this.poll = data.poll;
    });
    this.populateColors();
    console.log(this.colors);
    this.data = {
      labels: this.labelNames,
      datasets: [
        {
          data: this.voteNumbers,
          backgroundColor: this.colors,
        },
      ],
    };

    this.options = {
      legend: {
        display: false,
      },
    };
  }

  getOptionPrecent(optionVotes) {
    const precent = (optionVotes / this.poll.totalVotes) * 100;
    if (!precent) return 0;
    return parseFloat('' + precent).toFixed(2);
  }

  onUpdatePoll(updatedPoll: Poll) {
    this.poll = updatedPoll;
  }

  get labelNames() {
    const labelNames = this.poll.options.map((option) => {
      return option.txt;
    });
    return labelNames;
  }

  get voteNumbers() {
    const voteNumbers = this.poll.options.map((option) => {
      return option.votes;
    });
    return voteNumbers;
  }

  get sortedOptionsDescending() {
    const pollCopy: Poll = cloneDeep(this.poll);
    pollCopy.options.sort((a, b): any => {
      return b.votes - a.votes;
    });
    return pollCopy;
  }

  populateColors() {
    this.colors = [
      '#FFCE56',
      '#36A2EB',
      '#aed987',
      '#ef8250',
      '#2196f3',
      '#009688',
      '#ff9800',
      '#d45087',
      '#2f4b7c',
      '#63b179',
      '#ffa600',
      '#e4604e',
      '#3f51b5',
      '#665191',
      '#03a9f4',
      '#ffff9d',
      '#ff5722',
      '#00876c',
      '#fee17e',
      '#003f5c',
      '#d43d51',
      '#f7a258',
      '#e91e63',
      '#673ab7',
      '#fcc267',
      '#ff7c43',
      '#f44336',
      '#9c27b0',
      '#00bcd4',
      '#88c580',
      '#795548',
      '#f95d6a',
      '#ffeb3b',
      '#4caf50',
      '#3d9c73',
      '607d8b',
      '#a05195',
      '#d6ec91',
    ];
  }
}
