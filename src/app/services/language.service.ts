import { Injectable, signal, inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Language } from '@/interfaces'

export type Lang = 'ro' | 'de' | 'en' | 'ru'

export const LANGUAGES: Language[] = [
  { code: 'ro', label: 'RO', flag: 'assets/flags/ro.svg' },
  { code: 'de', label: 'DE', flag: 'assets/flags/de.svg' },
  { code: 'en', label: 'EN', flag: 'assets/flags/en.svg' },
  { code: 'ru', label: 'RU', flag: 'assets/flags/ru.svg' },
]

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService)
  currentLang = signal<Lang>((localStorage.getItem('lang') as Lang) || 'ro')

  setLang(lang: Lang): void {
    this.currentLang.set(lang)
    localStorage.setItem('lang', lang)
    this.translate.use(lang)
  }

  getLangMeta(code: Lang) {
    return LANGUAGES.find(l => l.code === code)!
  }
}