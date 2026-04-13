import { Injectable, inject } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { SeoData } from '@/interfaces'

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title)
  private meta = inject(Meta)
  private router = inject(Router)
  private translate = inject(TranslateService)

  apply(seo: SeoData): void {
    const resolvedTitle = this.translate.instant(seo.title)
    const resolvedDesc = this.translate.instant(seo.description)
    const canonicalUrl = `https://german.clg.md${this.router.url}`

    this.title.setTitle(resolvedTitle)

    this.meta.updateTag({ name: 'description', content: resolvedDesc })
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl })
    this.meta.updateTag({ property: 'og:title', content: resolvedTitle })
    this.meta.updateTag({ property: 'og:description', content: resolvedDesc })
    this.meta.updateTag({ property: 'og:locale', content: this.translate.currentLang || 'ro' })

    // Canonical
    this.setCanonical(canonicalUrl)

    // html lang attribute
    document.documentElement.lang = this.translate.currentLang || 'ro'

    // Extra tags from route data
    for (const tag of seo.metaTags) {
      const resolved = { ...tag, content: this.translate.instant(tag.content) }
      if (tag.name) this.meta.updateTag({ name: tag.name, content: resolved.content })
      if (tag.property) this.meta.updateTag({ property: tag.property, content: resolved.content })
    }
  }

  private setCanonical(url: string): void {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)
  }
}
