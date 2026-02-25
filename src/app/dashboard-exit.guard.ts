import { CanDeactivateFn } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export const dashboardExitGuard: CanDeactivateFn<Dashboard> =
  (component: Dashboard) => {
    return component.canExit();
  };