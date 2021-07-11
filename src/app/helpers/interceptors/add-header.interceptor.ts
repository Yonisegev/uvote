import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.indexOf('abstractapi') === -1) {
      const clonedRequest = req.clone({ setHeaders: { 'allowed': 'Uvote' } });
      return next.handle(clonedRequest);
    } else {
      return next.handle(req)
    }
  }
}