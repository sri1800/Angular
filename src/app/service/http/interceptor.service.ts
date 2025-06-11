import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authService: AuthenticationServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.isAuthenticationTokenAvailable();
    if(token){
      const clonedReq = req.clone({
        setHeaders: {
          Authorization : token
        }
      });
      return next.handle(clonedReq);
    }
    return next.handle(req);
  }
}
