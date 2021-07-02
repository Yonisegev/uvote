import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}
  pencilIcon = faPencilAlt;
  usersIcon = faUsers;
  pollIcon = faPoll;
  arrowIcon = faArrowRight;
  ngOnInit(): void {}
}
