import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataToke } from '../interfaces/auth';

export const notLoginGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let result!: DataToke;
  if (localStorage.getItem('token')) {
    const token: string = localStorage.getItem('token')!;
    result = await authService.validaToken(token);

    if (result.user_id) {
      router.navigate(['/home']);
      return false;
    }
  }

  return true;
};
