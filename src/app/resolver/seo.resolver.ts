import { inject } from '@angular/core'
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { SeoService } from '@/services/seo.service'
import { SeoData } from '@/interfaces'
import { Observable, of } from 'rxjs'
import { switchMap, take } from 'rxjs/operators'

export const seoResolver: ResolveFn<void> = (route: ActivatedRouteSnapshot): Observable<void> => {
  const translate = inject(TranslateService)
  const seoService = inject(SeoService)
  const seo = route.data['seo'] as SeoData | undefined

  if (!seo) return of(undefined)

  // Wait for current lang translations to be fully loaded, then apply SEO
  return translate.getTranslation(translate.currentLang || translate.defaultLang).pipe(
    take(1),
    switchMap(() => {
      seoService.apply(seo)
      return of(undefined)
    })
  )
}
