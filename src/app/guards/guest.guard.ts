import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const guestGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(AuthService);
  const router = inject(Router)

  tokenService.isAuthentication.subscribe({
    next: (value) => {
      if (value) {
        router.navigate(['dashboard'])
      }
    }
  })

  return true;
};
