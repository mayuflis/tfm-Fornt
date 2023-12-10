import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataToke } from '../interfaces/auth';

export const authRoleStudentsGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let result!: DataToke;
  if (localStorage.getItem('token')) {
    const token: string = localStorage.getItem('token')!;
    result = await authService.validaToken(token);

    if (result.user_id && result.user_role === 'student') {
      return true;
    }
  }
  router.navigate(['/login']);
  return false;
};
