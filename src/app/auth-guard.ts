import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const document = inject(DOCUMENT);

  // Check if we're in the browser
  if (typeof document !== 'undefined' && typeof localStorage !== 'undefined') {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return true;
    }
  }

  router.navigate(['/']);
  return false;
};