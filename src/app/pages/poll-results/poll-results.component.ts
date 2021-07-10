import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Poll } from 'src/app/models/poll';
import { cloneDeep } from 'lodash';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.scss'],
})
export class PollResultsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private socketService: SocketService
  ) { }
  poll: Poll;
  countriesCount: number[];
  countriesLabels: string[];
  data: any;
  countriesChartData: any;
  options: any;
  countriesOptions: any;
  colors: string[];
  scrWidth: number;

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (!data.poll) this.router.navigateByUrl('/404');
      this.poll = data.poll;
      this.socketService.on('connection');
      this.socketService.emit('join poll', data.poll._id);
      this.socketService.on('poll updated').subscribe((updatedPoll: Poll) => {
        this.poll = updatedPoll;
        this.populateResultsChart();
      });
    });
    this.getCountriesData();
    this.populateColors();
    this.populateResultsChart();
    this.populateCountriesChart();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.scrWidth = window.innerWidth;
  }

  populateResultsChart() {
    const dataToShow = this.voteCount;
    this.data = {
      labels: dataToShow ? this.optionsLabelNames : ['No data yet!'],
      datasets: [
        {
          data: dataToShow || ['100'],
          backgroundColor: this.colors,
        },
      ],
    };

    this.options = {
      legend: {
        display: false,
      },
      title: {
        text: 'Votes',
        display: true,
      },
      responsive: true,
      maintainAspectRatio: true,
    };
  }

  populateCountriesChart() {
    const dataToShow = this.countriesCount;
    this.countriesChartData = {
      labels: dataToShow ? this.countriesLabels : ['No data yet!'],
      datasets: [
        {
          data: dataToShow || ['Unknown'],
          backgroundColor: this.colors,
        },
      ],
    };

    this.countriesOptions = {
      legend: {
        display: false,
      },
      title: {
        text: 'Voters by country',
        display: true,
      },
    };
  }

  getOptionPrecent(optionVotes: number) {
    const precent = (optionVotes / this.poll.totalVotes) * 100;
    if (!precent) return 0;
    return parseFloat('' + precent).toFixed(2);
  }

  onUpdatePoll(updatedPoll: Poll) {
    this.poll = updatedPoll;
  }



  getCountriesData() {
    const voters = this.sortedPollByOptionsDescending.voters;
    const countries = [];
    for (const key in voters) {
      countries.push(voters[key]);
    }
    const countriesCountMap = {};
    countries.forEach((country) => {
      countriesCountMap[country]
        ? (countriesCountMap[country] += 1)
        : (countriesCountMap[country] = 1);
    });
    const labels = [];
    const count = [];
    for (const country in countriesCountMap) {
      labels.push(country);
      count.push(countriesCountMap[country]);
    }
    this.countriesLabels = labels;
    this.countriesCount = count;
  }

  get sortedPollByOptionsDescending(): Poll {
    const pollCopy: Poll = cloneDeep(this.poll);
    pollCopy.options.sort((a, b): any => {
      return b.votes - a.votes;
    });
    return pollCopy;
  }

  get optionsLabelNames(): string[] {
    const labelNames = this.sortedPollByOptionsDescending.options.map(
      (option) => option.txt
    );
    return labelNames;
  }

  get voteCount(): number[] | boolean {
    let voteCount = this.sortedPollByOptionsDescending.options.map((option) => {
      return option.votes;
    });
    if (voteCount.every((item) => item === 0)) {
      return false;
    }
    return voteCount;
  }

  get chartSize(): string {
    if ('' + this.scrWidth > '1080') {
      return '285px';
    } else {
      return '90vw';
    }
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
