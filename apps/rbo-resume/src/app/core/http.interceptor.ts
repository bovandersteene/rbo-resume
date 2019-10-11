import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTES } from '@rbo-resume/api-interfaces';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url = `${req.url}`;

    if (!Object.values(ROUTES).some(route => url.startsWith(route))) {
      return next.handle(req);
    }

    const newReq = req.clone({
      url: `http://localhost:3333/api/${url}`
    });

    return next.handle(newReq);
  }
}
