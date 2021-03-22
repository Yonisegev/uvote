import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poll } from 'src/app/models/poll';

@Component({
  selector: 'poll-edit',
  templateUrl: './poll-edit.component.html',
  styleUrls: ['./poll-edit.component.scss'],
})
export class PollEditComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  pollToEdit: Poll = null;
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.pollToEdit = data.poll;
    });
    console.log('The poll to edit is:', this.pollToEdit);
  }
}
