import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private _userData$: BehaviorSubject<any> = new BehaviorSubject(null); // Maybe make response interface?
  public userData$: Observable<any> = this._userData$.asObservable();
  private BASE_URL: string = 'http://localhost:3030/api/auth';

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

  public registerUser(userInfo) {
    userInfo.name = userInfo.name.trim()
    if(this._userData$) {
      const sub:Subscription = this.userData$.subscribe(geoInfo => {
        userInfo.country = geoInfo.country
        userInfo.flag = geoInfo.flag.svg
      })
      sub.unsubscribe()
    }
    console.log('from service', userInfo)
    return this.http.post(`${this.BASE_URL}/signup`, userInfo)
  }

  public checkifEmailExists(email) {
    return this.http.get(`http://localhost:3030/api/user/email/${email}`)
  }

  public emailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkifEmailExists(control.value).pipe(
        catchError(err => of('')),
        map(res => {
          return res ? {emailExists: true} : null
        })
      )
    }
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
