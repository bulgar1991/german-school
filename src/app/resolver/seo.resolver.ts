import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { SeoService } from '@/services/seo.service';
import { SeoData } from '@/interfaces';

export const seoResolver: ResolveFn<void> = (route: ActivatedRouteSnapshot) => {
  const seo = route.data['seo'] as SeoData | undefined;
  if (seo) {
    inject(SeoService).apply(seo);
  }
};
