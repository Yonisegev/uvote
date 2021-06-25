import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// @ts-ignore
import * as io from 'socket.io-client/dist/socket.io';
import { Poll } from '../models/poll';
@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: any;
  readonly BASE_URL: string = 'localhost:3030';

  constructor() {
    this.socket = io(this.BASE_URL);
  }

  on(eventName: string):Observable<Poll> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
