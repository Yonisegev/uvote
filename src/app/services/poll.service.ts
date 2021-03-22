import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Poll } from '../models/poll';
import { storageService } from './async-storage.service';
const ENTITY = 'poll';
@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private http: HttpClient) {
    const polls = JSON.parse(localStorage.getItem(ENTITY) || null);
    if (!polls || !polls.length) {
      localStorage.setItem(ENTITY, JSON.stringify(this.pollsDB));
    }
  }

  private _polls$: BehaviorSubject<Poll[]> = new BehaviorSubject(null);
  public polls$: Observable<Poll[]> = this._polls$.asObservable();

  public async query() {
    const polls = (await storageService.query(ENTITY)) as Poll[];
    this._polls$.next(polls);
  }

  public getById(pollId: string): Observable<Poll> {
    return from(storageService.get(ENTITY, pollId) as Promise<Poll>);
  }

  public addVote(poll, selectionId) {
    console.log('From poll service:', { poll });
    // return this.http.get<{ values: any }>('http://ip-api.com/json/');
    const optionToUpdateIdx = poll.options.findIndex(
      (option) => option._id === selectionId
    );
    poll.options[optionToUpdateIdx].votes += 1;
    poll.totalVotes += 1;
    storageService.put(ENTITY, poll);
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
