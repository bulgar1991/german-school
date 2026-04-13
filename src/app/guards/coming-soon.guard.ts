import { inject } from '@angular/core'
import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router'

export const comingSoonGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  if (route.data['comingSoon'] === true) {
    return inject(Router).createUrlTree(['/coming-soon'])
  }
  return true
}
