import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private _userData$: BehaviorSubject<any> = new BehaviorSubject(null); // Maybe make response interface?
  public userData$: Observable<any> = this._userData$.asObservable();

  public getUserData() {
    const cachedUserInfo = this.loadFromStorage();
    if (cachedUserInfo) {
      this._userData$.next(cachedUserInfo);
      return;
    }
    this.http
      .get(
        'https://ipgeolocation.abstractapi.com/v1/?api_key=a73f9c3ddf2a4da6ba8f13d7a88898f4',
        {
          headers: null,
        }
      )
      .subscribe((userData: any) => {
        this.saveToStorage(userData);
        this._userData$.next(userData);
      });
  }
  private saveToStorage(val) {
    const str = JSON.stringify(val);
    localStorage.setItem('user-info', str);
  }

  private loadFromStorage() {
    const str = localStorage.getItem('user-info');
    return JSON.parse(str);
  }
}

// public query() {
//   this.http.get(this.BASE_URL).subscribe((polls: Poll[]) => {
//     this._polls$.next(polls);
//   });
// }
