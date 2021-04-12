import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Poll } from '../models/poll';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private http: HttpClient, private userService: UserService) {}

  private BASE_URL: string = 'http://localhost:3030/api/poll';
  private _polls$: BehaviorSubject<Poll[]> = new BehaviorSubject(null);
  public polls$: Observable<Poll[]> = this._polls$.asObservable();
  userData;

  public query() {
    this.http.get(this.BASE_URL).subscribe((polls: Poll[]) => {
      this._polls$.next(polls);
    });
  }

  public getById(pollId: string): Observable<Poll> {
    return this.http.get<Poll>(`${this.BASE_URL}/${pollId}`).pipe(
      catchError((errorRes) => {
        return throwError(`Failed to get poll ${pollId}, ${errorRes}`);
      })
    );
  }

  public addVote(poll, selectionId) {
    this.userService.userData$.subscribe((userData) => {
      // Show spinner while checking?
      this.userData = userData;
    });
    console.log('From poll service:', { poll });
    const optionToUpdateIdx = poll.options.findIndex(
      (option) => option._id === selectionId
    );
    const userIp = this.userData.ip_address;
    if (poll.voters[userIp]) {
      console.log('user already voted!'); // HANDLE ERROR HERE
      return;
    }
    console.log('the userdata is', this.userData);

    poll.options[optionToUpdateIdx].votes += 1;
    poll.totalVotes += 1;
    poll.voters[userIp] = true;

    return this.http.put(`${this.BASE_URL}/${poll._id}`, poll);
  }

  private pollsDB = [
    {
      title: 'Which frontend framework should I learn?',
      description: 'I cant choose between the three, help me decide',
      options: [
        {
          txt: 'React',
          votes: 3,
          _id: 'o101',
        },
        {
          txt: 'Angular',
          votes: 2,
          _id: 'o102',
        },
        {
          txt: 'Vue',
          votes: 3,
          _id: 'o103',
        },
      ],
      totalVotes: 8,
      isPrivate: false,
      createdAt: 1614010766136,
      dueDate: null,
      _id: 'p101',
      owner: {
        username: 'Yoni',
        _id: 'u101',
      },
      views: 2,
      comments: [],
    },
    {
      title: 'What should I eat?',
      description: 'I cant choose between the three, help me decide',
      options: [
        {
          txt: 'Sushi',
          votes: 3,
          _id: 'o101',
        },
        {
          txt: 'Hamburger',
          votes: 2,
          _id: 'o102',
        },
        {
          txt: 'Pizza',
          votes: 3,
          _id: 'o103',
        },
      ],
      totalVotes: 8,
      isPrivate: false,
      createdAt: 1614010766136,
      dueDate: null,
      _id: 'p102',
      owner: {
        username: 'Yoni',
        _id: 'u101',
      },
      views: 5,
      comments: [],
    },
  ];
}
