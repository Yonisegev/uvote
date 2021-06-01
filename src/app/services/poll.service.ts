import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { Poll } from '../models/poll';
import { UserService } from './user.service';
import { UtilService } from './util.service';
import { LoggedUser } from '../models/logged-user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private utilService: UtilService,
    private router: Router
  ) {}

  private BASE_URL: string = 'http://localhost:3030/api/poll';
  private _polls$: BehaviorSubject<Poll[]> = new BehaviorSubject([]);
  public polls$: Observable<Poll[]> = this._polls$.asObservable();
  private userData;

  public query(): void {
    this.http.get<Poll[]>(this.BASE_URL).subscribe((polls: Poll[]) => {
      polls = polls.filter((poll) => !poll.isPrivate);
      this._polls$.next(polls);
    });
  }

  public getById(pollId: string): Observable<Poll> {
    return this.http.get<Poll>(`${this.BASE_URL}/${pollId}`).pipe(
      catchError((errorRes) => {
        this.router.navigateByUrl('/error');
        return throwError(`Failed to get poll ${pollId}, ${errorRes}`);
      })
    );
  }

  public addVote(poll, selectionId): Observable<Poll> {
    this.userService.userData$.subscribe((userData) => {
      this.userData = userData;
    });
    const loggedUser: LoggedUser = this.userService.loggedUserValue
    console.log('From poll service:', { poll });
    const optionToUpdateIdx = poll.options.findIndex(
      (option) => option._id === selectionId
    );
    const userIp = this.userData.ip_address;
    if (poll.voters[userIp] || poll.voters[loggedUser?._id]) {
      return throwError((err) => new Error('User already voted'));
    }
    console.log('the userdata is', this.userData);

    poll.options[optionToUpdateIdx].votes += 1;
    poll.totalVotes += 1;
    poll.voters[userIp] = true;
    if(loggedUser) {
      poll.voters[loggedUser._id] = true
    }

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

  public onCommentSubmit(txt, poll: Poll) {
    const commentToAdd = {
      txt,
      createdAt: Date.now(),
      author: {},
    };
    let author: Partial<LoggedUser> = this.userService.loggedUserValue;
    if (!author) {
      let guestData = this.userService.userData;
      author = {
        _id: 'guest',
        name: 'Guest',
        country: guestData.country,
        flag: guestData.flag.svg,
        logoColor:
          this.userService.loggedUserValue?.logoColor ||
          this.utilService.getRandomLightColor(),
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
}
