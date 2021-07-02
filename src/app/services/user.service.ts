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
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private utilService: UtilService) {}
  private _guestData$: BehaviorSubject<any> = new BehaviorSubject(null);
  public guestData$: Observable<any> = this._guestData$.asObservable();
  private _loggedInUser$: BehaviorSubject<any> = new BehaviorSubject(
    this.utilService.loadFromStorage('user')
  );
  public loggedInUser$: Observable<any> = this._loggedInUser$.asObservable();

  public getGuestData() {
    const cachedUserInfo = this.utilService.loadFromStorage('user-info');
    if (cachedUserInfo) {
      this._guestData$.next(cachedUserInfo);
      return;
    }
    this.http
      .get(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=${environment.apiKey}`,
        {
          headers: null,
        }
      )
      .subscribe((guestData: any) => {
        this.utilService.saveToStorage('user-info', guestData);
        this._guestData$.next(guestData);
      });
  }

  public get loggedUserValue(): LoggedUser {
    return this._loggedInUser$.value;
  }

  public get guestDataValue() {
    return this._guestData$.value;
  }

  public login(credentials: {
    name: string;
    email: string;
    password: string | number;
  }): Observable<LoggedUser> {
    return this.http
      .post<LoggedUser>(`${environment.authURL}/login`, credentials, {
        withCredentials: true,
      })
      .pipe(catchError((err) => throwError(err)));
  }

  public getById(
    userId: string,
    pageNumber = 1,
    sortBy = 'newest'
  ): Observable<User> {
    const query = { page: '' + pageNumber, sortBy };
    return this.http.get<User>(`${environment.userURL}/${userId}`, {
      params: query,
    });
  }

  public registerUser(userInfo: User): Subscription {
    userInfo.name = userInfo.name.trim();
    userInfo.email = userInfo.email.toLowerCase();
    userInfo.logoColor = this.utilService.getRandomLightColor();
    if (this._guestData$) {
      const guestData = this.guestDataValue;
      userInfo.country = guestData.country;
      userInfo.flag = guestData.flag.svg;
    }
    console.log('from service', userInfo);
    return this.http
      .post(`${environment.authURL}/signup`, userInfo, {
        withCredentials: true,
      })
      .subscribe((loggedInUser) => {
        this.utilService.saveToStorage('user', loggedInUser);
        this._loggedInUser$.next(loggedInUser);
      });
  }

  public socialRegister(socialUser: any): void {
    this.checkifEmailExists(socialUser.email).subscribe(
      (isRegistred) => {
        console.log(isRegistred, 'need to log in!');
        this.login(socialUser).subscribe((loggedInUser) =>
          this._loggedInUser$.next(loggedInUser)
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
      .post(`${environment.authURL}/logout`, {}, { withCredentials: true })
      .subscribe();
  }

  public updateLoggedUser(user: LoggedUser): void {
    this._loggedInUser$.next(user);
    this.utilService.saveToStorage('user', user);
  }

  public checkifEmailExists(email: string): Observable<object> {
    return this.http.get(`http://localhost:3030/api/user/email/${email}`);
  }

  public emailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkifEmailExists(control.value.toLowerCase()).pipe(
        catchError((err) => of('')),
        map((res) => {
          return res ? { emailExists: true } : null;
        })
      );
    };
  }

  private saveToStorage(key: string, val: any) {
    const str = JSON.stringify(val);
    localStorage.setItem(key, str);
  }

  private loadFromStorage(key: string) {
    const str = localStorage.getItem(key);
    return JSON.parse(str);
  }
}
