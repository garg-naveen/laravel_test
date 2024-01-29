import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)
  const authService = inject(AuthService);
  let token   = localStorage.getItem("token");
  // const authReq = req.clone({
  //   headers: req.headers.set('Authorization', `Bearer ${token}`)
  // })

  authService.isAuthentication.subscribe({
    next: (value) => {
      if (value) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })
      }
    }
  })

  return next(req).pipe(
    catchError((e: HttpErrorResponse) => {
      if (e.status === 401) {
        authService.logout()
      }

      const error = e.error?.message || e.statusText

      return throwError(() => error)

    })
  );
};
