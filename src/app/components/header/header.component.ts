import { Component, signal, HostListener } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { MatMenuModule } from '@angular/material/menu'
import { NavLink } from '@/interfaces'
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterLinkActive, MatMenuModule, LanguageSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  sidebarOpen = signal(false)
  scrolled = signal(false)
  openMobile = signal<string | null>(null)

  navLinks: NavLink[] = [
    { key: 'nav.home', anchor: '/' },
    {
      key: 'nav.courses',
      anchor: '/cursuri',
      children: [
        {
          key: 'nav.medical',
          anchor: '/cursuri-medici',
          children: [
            { key: 'nav.medicalGeneral', anchor: '/cursuri-medici/oferta-generala' },
            { key: 'nav.medicalFormat', anchor: '/cursuri-medici/mod-desfasurare' },
            { key: 'nav.medicalSupport', anchor: '/cursuri-medici/suport-curs' },
            { key: 'nav.medicalTeaching', anchor: '/cursuri-medici/mod-predare' },
            { key: 'nav.medicalExam', anchor: '/cursuri-medici/pregatire-examene' },
          ],
        },
      ],
    },
    { key: 'nav.osd', anchor: '/examene-osd' },
    { key: 'nav.abroad', anchor: '/studii-strainatate' },
    { key: 'nav.about', anchor: '/despre-noi' },
  ]

  openSidebar(): void {
    this.sidebarOpen.set(true)
    document.body.style.overflow = 'hidden'
  }
  closeSidebar(): void {
    this.sidebarOpen.set(false)
    document.body.style.overflow = ''
  }

  toggleMobile(key: string): void {
    this.openMobile.update(cur => (cur === key ? null : key))
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20)
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeSidebar()
  }
}
