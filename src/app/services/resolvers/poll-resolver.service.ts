import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Poll } from 'src/app/models/poll';
import { PollService } from '../poll.service';

@Injectable({
  providedIn: 'root',
})
export class PollResolverService {
  constructor(private pollService: PollService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Poll> {
    const { id } = route.params;
    if (!id) {
      this.router.navigateByUrl('/404');
      return null;
    }
    return this.pollService.getById(id);
  }
}
