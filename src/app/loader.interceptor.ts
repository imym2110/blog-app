import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';



@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('This is server side error');
         // errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          this.toastr.error(error.message)
        }
        //console.log(errorMsg);
        return throwError(() => errorMsg);
      })
    )
  }
}
