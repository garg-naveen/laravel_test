import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(AuthService);
  const router = inject(Router)

  if(!tokenService.session) {
    router.navigate(['/login'])
  }

  return true;
};
