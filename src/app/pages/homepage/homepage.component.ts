import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPoll } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private titleService: Title) {}
  pencilIcon = faPencilAlt;
  usersIcon = faUsers;
  pollIcon = faPoll;
  arrowIcon = faArrowRight;
  ngOnInit(): void {
    this.titleService.setTitle('Uvote')
  }
}
