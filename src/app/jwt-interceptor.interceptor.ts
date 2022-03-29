import { Injectable } from '@angular/core';
import {
    HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem("token");
       console.log(token);
       console.log("asdasdasdasdasd");
       if(token!==undefined) {
         request.clone({
           setHeaders:{
             Authorization:'bearer '+token
           }
         })
       }
      return next.handle(request);
      }
}
