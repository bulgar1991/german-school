import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { SeoData } from '@/interfaces';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title     = inject(Title);
  private meta      = inject(Meta);
  private translate = inject(TranslateService);

  apply(seo: SeoData): void {
    const resolvedTitle = this.translate.instant(seo.title);
    const resolvedDesc  = this.translate.instant(seo.description);

    this.title.setTitle(resolvedTitle);

    this.meta.updateTag({ name: 'description', content: resolvedDesc });

    for (const tag of seo.metaTags) {
      const resolved = { ...tag, content: this.translate.instant(tag.content) };
      if (tag.name)     this.meta.updateTag({ name: tag.name,         content: resolved.content });
      if (tag.property) this.meta.updateTag({ property: tag.property, content: resolved.content });
    }
  }
}
