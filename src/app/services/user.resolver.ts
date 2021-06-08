import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver {
  constructor(private userService: UserService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const { id } = route.params;
    console.log(route.params)
    if (!id) {
      this.router.navigateByUrl('/404');
      return null;
    }
    return this.userService.getById(id);
  }
}
