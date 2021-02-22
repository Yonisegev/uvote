import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Poll } from '../models/poll';
import { storageService } from './async-storage.service';
const ENTITY = 'poll';
@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor() {
    const polls = JSON.parse(localStorage.getItem(ENTITY) || null);
    if (!polls || !polls.length) {
      localStorage.setItem(ENTITY, JSON.stringify(this.pollsDB));
    }
  }

  private _polls$: BehaviorSubject<Poll[]> = new BehaviorSubject(null);
  public polls$: Observable<Poll[]> = this._polls$.asObservable();

  public async query() {
    const items = (await storageService.query(ENTITY)) as Poll[];
    this._polls$.next(items);
  }

  public getById(pollId: string): Observable<Poll> {
    return from(storageService.get(ENTITY, pollId) as Promise<Poll>);
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
