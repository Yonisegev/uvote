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
import { LoggedUser } from '../models/logged-user';
import { User } from '../models/user';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private utilService: UtilService) {}
  private _guestData$: BehaviorSubject<any> = new BehaviorSubject(null);
  public guestData$: Observable<any> = this._guestData$.asObservable();
  private _loggedInUser$: BehaviorSubject<any> = new BehaviorSubject(
    this.loadFromStorage('user')
  );
  public loggedInUser$: Observable<any> = this._loggedInUser$.asObservable();
  private BASE_URL: string = 'http://localhost:3030/api/auth';
  private USER_URL: string = 'http://localhost:3030/api/user';

  public getGuestData() {
    const cachedUserInfo = this.loadFromStorage('user-info');
    if (cachedUserInfo) {
      this._guestData$.next(cachedUserInfo);
      return;
    }
    this.http
      .get(
        'https://ipgeolocation.abstractapi.com/v1/?api_key=a73f9c3ddf2a4da6ba8f13d7a88898f4',
        {
          headers: null,
        }
      )
      .subscribe((guestData: any) => {
        this.saveToStorage('user-info', guestData);
        this._guestData$.next(guestData);
      });
  }

  public get loggedUserValue(): LoggedUser {
    return this._loggedInUser$.value;
  }

  public get guestDataValue() {
    return this._guestData$.value;
  }

  public login(credentials): Observable<any> {
    console.log('the creds are', credentials);
    return this.http
      .post(`${this.BASE_URL}/login`, credentials, { withCredentials: true })
      .pipe(catchError((err) => throwError(err)));
  }

  public getById(userId): Observable<User> {
    return this.http.get<User>(`${this.USER_URL}/${userId}`)
  }

  public registerUser(userInfo): Subscription {
    userInfo.name = userInfo.name.trim();
    userInfo.email = userInfo.email.toLowerCase();
    userInfo.logoColor = this.utilService.getRandomLightColor();
    if (this._guestData$) {
      const sub: Subscription = this.guestData$.subscribe((geoInfo) => {
        userInfo.country = geoInfo.country;
        userInfo.flag = geoInfo.flag.svg;
      });
      sub.unsubscribe();
    }
    console.log('from service', userInfo);
    return this.http
      .post(`${this.BASE_URL}/signup`, userInfo, { withCredentials: true })
      .subscribe((loggedInUser) => {
        this.saveToStorage('user', loggedInUser);
        this._loggedInUser$.next(loggedInUser);
      });
  }

  public socialRegister(socialUser): void {
    this.checkifEmailExists(socialUser.email).subscribe(
      (isRegistred) => {
        console.log(isRegistred, 'need to log in!');
        const loginSub: Subscription = this.login(socialUser).subscribe(
          (loggedInUser) => this._loggedInUser$.next(loggedInUser)
        );
      },
      (err) => {
        if (err.status === 500) {
          console.log('signing up!');
          this.registerUser(socialUser);
        }
      }
    );
  }

  public logout(): void {
    localStorage.removeItem('user');
    this._loggedInUser$.next(null);
    this.http
      .post(`${this.BASE_URL}/logout`, {}, { withCredentials: true })
      .subscribe();
  }

  public updateLoggedUser(user): void {
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
