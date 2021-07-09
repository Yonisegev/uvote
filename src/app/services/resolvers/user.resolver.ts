import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver {
  constructor(private userService: UserService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const { id } = route.params;
    const page = route.queryParams.page || 1
    if (!id) {
      this.router.navigateByUrl('/404');
      return null;
    }
    return this.userService.getById(id, page);
  }
}
