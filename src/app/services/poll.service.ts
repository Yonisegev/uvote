import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Poll } from '../models/poll';
import { UserService } from './user.service';
import { UtilService } from './util.service';
import { LoggedUser } from '../models/logged-user';
import { Router } from '@angular/router';
import { SocketService } from './socket.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private utilService: UtilService,
    private router: Router,
    private socketService: SocketService
  ) { }

  private _polls$: BehaviorSubject<Poll[]> = new BehaviorSubject([]);
  public polls$: Observable<Poll[]> = this._polls$.asObservable();
  private _totalPollsCount$: BehaviorSubject<number> = new BehaviorSubject(100);
  public totalPollsCount$: Observable<number> =
    this._totalPollsCount$.asObservable();

  public query(pageNumber = 1, sortBy = 'newest'): void {
    const query = { page: '' + pageNumber, sortBy };
    this.http
      .get<any>(`${environment.pollURL}`, { params: query })
      .subscribe((res: { data: Poll[]; total: number }) => {
        const polls = res.data.filter((poll) => !poll.isPrivate);
        this._polls$.next(polls);
        this._totalPollsCount$.next(res.total);
      });
  }

  public getById(pollId: string): Observable<Poll> {
    return this.http.get<Poll>(`${environment.pollURL}/${pollId}`).pipe(
      catchError((errorRes) => {
        this.router.navigateByUrl('/404');
        return throwError(`Failed to get poll ${pollId}, ${errorRes}`);
      })
    );
  }

  public addVote(poll: Poll, selectedOptions: any[]): Observable<Poll> {
    const guestData = this.userService.guestDataValue;
    const loggedUser: LoggedUser = this.userService.loggedUserValue;
    const userIp: string = guestData?.ip_address;

    if (poll.voters[userIp] || poll.voters[loggedUser?._id]) {
      return throwError((err: Error) => new Error('User already voted'));
    }

    selectedOptions.forEach((selectionId) => {
      const optionToUpdateIdx = poll.options.findIndex(
        (option) => option._id === selectionId
      );
      poll.options[optionToUpdateIdx].votes += 1;
    });

    poll.totalVotes += selectedOptions.length;
    if (loggedUser) {
      poll.voters[loggedUser._id] = loggedUser.country || 'Unknown Country';
    } else if (userIp) {
      poll.voters[userIp] = guestData.country;
    } else {
      return
    }
    this.socketService.emit('update poll', poll);
    return this.update(poll._id, poll);
  }

  public submitPoll(poll: Poll): any {
    if (poll._id) {
      return this.update(poll._id, poll);
    } else {
      delete poll._id;
      return this.create(poll);
    }
  }

  public addComment(txt: string, poll: Poll): Observable<Poll> {
    const commentToAdd = {
      txt,
      createdAt: Date.now(),
      author: {},
    };
    let author: Partial<LoggedUser> = this.userService.loggedUserValue;
    if (!author) {
      let guestData = this.userService.guestDataValue;
      author = {
        _id: 'guest',
        name: 'Guest',
        country: guestData?.country || 'Unknown',
        flag: guestData?.flag.svg,
        logoColor:
          this.userService.loggedUserValue?.logoColor ||
          this.utilService.getRandomLightColor(),
      };
    }
    commentToAdd.author = author;
    poll.comments = [commentToAdd, ...poll.comments];
    return this.update(poll._id, poll);
  }

  private create(poll: Poll) {
    return this.http.post<Poll>(environment.pollURL, poll);
  }

  private update(pollId: string, poll: Poll) {
    const user = this.userService.loggedUserValue
    return this.http.put<Poll>(`${environment.pollURL}/${pollId}`, { poll, user }, {
      withCredentials: true,
    });
  }

  public remove(pollId: string) {
    return this.http.delete(`${environment.pollURL}/${pollId}`, {
      withCredentials: true,
    });
  }
}
