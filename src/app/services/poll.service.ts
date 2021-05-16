import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { Poll } from '../models/poll';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private http: HttpClient, private userService: UserService) {}

  private BASE_URL: string = 'http://localhost:3030/api/poll';
  private _polls$: BehaviorSubject<Poll[]> = new BehaviorSubject([]);
  public polls$: Observable<Poll[]> = this._polls$.asObservable();
  private userData;

  public query(): void {
    this.http
      .get<any>(this.BASE_URL)
      .pipe(filter((poll) => !poll.isPrivate))
      .subscribe((polls: Poll[]) => {
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

  public addVote(poll, selectionId): Observable<Poll> {
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

    return this.update(poll._id, poll);
  }

  public onPollSubmit(poll: Poll): any {
    console.log('On poll submit:', poll);
    if (poll._id) {
      console.log('EDIT!', poll, poll._id);
      return this.update(poll._id, poll);
    } else {
      console.log('CREATE!');
      delete poll._id;
      return this.create(poll);
    }
  }

  public onCommentSubmit(comment, poll: Poll) {
    const commentToAdd = {
      txt: comment,
      createdAt: Date.now(),
      author: {},
    };
    let author = this.userService.loggedUserValue;
    if (!author) {
      let guestData = this.userService.userData;
      author = {
        _id: 'guest',
        name: 'Guest',
        email: 'uvoteguest@gmail.com',
        country: guestData.country,
        flag: guestData.flag.svg,
      };
    }
    console.log('the author is', author);
    commentToAdd.author = author;
    poll.comments = [commentToAdd, ...poll.comments];
    console.log('the comments are', poll.comments);
    return this.update(poll._id, poll);
  }

  private create(poll: Poll) {
    console.log('From create, the poll to add is', poll);
    return this.http.post<Poll>(this.BASE_URL, poll);
  }

  private update(pollId, poll: Poll) {
    return this.http.put<Poll>(`${this.BASE_URL}/${pollId}`, poll);
  }

  public remove(pollId) {
    return this.http.delete(`${this.BASE_URL}/${pollId}`, {
      withCredentials: true,
    });
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
      isComments: true,
      createdAt: 1614010766136,
      dueDate: null,
      _id: 'p101',
      owner: {
        username: 'Yoni',
        _id: 'u101',
      },
      views: 2,
      comments: [],
      voters: [],
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
      isComments: false,
      createdAt: 1614010766136,
      dueDate: null,
      _id: 'p102',
      owner: {
        username: 'Yoni',
        _id: 'u101',
      },
      views: 5,
      comments: [],
      voters: [],
    },
  ];
}
