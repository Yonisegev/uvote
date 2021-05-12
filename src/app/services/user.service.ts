import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  of,
  Subscription,
  throwError,
} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private _userData$: BehaviorSubject<any> = new BehaviorSubject(null);
  public userData$: Observable<any> = this._userData$.asObservable();
  private _loggedInUser$: BehaviorSubject<any> = new BehaviorSubject(
    this.loadFromStorage('user')
  );
  public loggedInUser$: Observable<any> = this._loggedInUser$.asObservable();
  private BASE_URL: string = 'http://localhost:3030/api/auth';

  public getUserData() {
    const cachedUserInfo = this.loadFromStorage('user-info');
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
        this.saveToStorage('user-info', userData);
        this._userData$.next(userData);
      });
  }

  public get loggedUserValue(): User {
    return this._loggedInUser$.value;
  }

  public login(credentials) {
    console.log('the creds are', credentials);
    return this.http
      .post(`${this.BASE_URL}/login`, credentials)
      .pipe(catchError((err) => throwError(err)));
  }

  public registerUser(userInfo) {
    userInfo.name = userInfo.name.trim();
    if (this._userData$) {
      const sub: Subscription = this.userData$.subscribe((geoInfo) => {
        userInfo.country = geoInfo.country;
        userInfo.flag = geoInfo.flag.svg;
        userInfo.polls = [];
      });
      sub.unsubscribe();
    }
    console.log('from service', userInfo);
    return this.http
      .post(`${this.BASE_URL}/signup`, userInfo)
      .subscribe((loggedInUser) => {
        this.saveToStorage('user', loggedInUser);
        this._loggedInUser$.next(loggedInUser);
      });
  }

  public socialRegister(socialUser) {
    this.checkifEmailExists(socialUser.email).subscribe(
      (isRegistred) => {
        this.login(socialUser).subscribe(loggedUser => this.updateLoggedUser(loggedUser) )
        console.log(isRegistred, 'need to log in!');
      },
      (err) => {
        if (err.status === 500) {
          console.log('signing up!');
          this.registerUser(socialUser);
        }
      }
    );
  }

  public logout() {
    localStorage.removeItem('user');
    this._loggedInUser$.next(null);
  }

  public updateLoggedUser(user) {
    this._loggedInUser$.next(user);
    this.saveToStorage('user', user);

  }

  public checkifEmailExists(email): Observable<object> {
    return this.http.get(`http://localhost:3030/api/user/email/${email}`);
  }

  public emailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkifEmailExists(control.value).pipe(
        catchError((err) => of('')),
        map((res) => {
          return res ? { emailExists: true } : null;
        })
      );
    };
  }

  private saveToStorage(key, val) {
    const str = JSON.stringify(val);
    localStorage.setItem(key, str);
  }

  private loadFromStorage(key) {
    const str = localStorage.getItem(key);
    return JSON.parse(str);
  }
}
